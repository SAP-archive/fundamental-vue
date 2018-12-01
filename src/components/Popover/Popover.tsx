import { Component, Watch, Prop } from 'vue-property-decorator';
import { Menu, MenuList, MenuItem } from './../Menu';
import { Button } from './../Button';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { componentName } from '@/util';
import { Api } from '@/api';
import { ClickAwayContainer } from '@/components/ClickAwayContainer';

const popoverPlacementMapping = {
  left: 'Popover Body is placed on the left (default)',
  right: 'Popover Body is placed on the right',
};
type PopoverPlacement = keyof typeof popoverPlacementMapping;
const PopoverPlacements = Object.keys(popoverPlacementMapping) as PopoverPlacement[];

interface Props {
  uid?: string; // Uid mixin
  title?: string;
  popoverVisible?: boolean;
  noArrow?: boolean;
  placement?: PopoverPlacement;
}

@Component({
  name: componentName('Popover'),
  components: {
    Button,
    Menu,
    MenuList,
    MenuItem,
  },
})
@Api.Component('Popover', comp => {
  comp
    .addEvent('click', 'Sent when an item in the popover was clicked', event => {
      event.raw('value', 'MenuItem value');
    });
})
export class Popover extends mixins(Uid) {
  @Api.Prop('ARIA label', prop => prop.type(String))
  @Prop({ type: String, default: 'Popover' })
  public ariaLabel!: string;

  @Api.Prop('title displayed when no custom trigger element is used', prop => prop.type(String))
  @Prop({ type: String, default: 'Show' })
  public title!: string;

  @Api.Prop('popover placement', prop => prop.type(String))
  @Prop({ type: String, default: 'left', validator: value => PopoverPlacements.includes(value) })
  public placement!: PopoverPlacement;

  @Api.Prop('whether popover is visible', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false })
  public popoverVisible!: boolean;

  @Api.Prop('whether popover has an arrow', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false })
  public noArrow!: boolean;

  public currentPopoverVisible: boolean = this.popoverVisible;
  public $tsxProps!: Readonly<{}> & Readonly<Props>;

  @Watch('popoverVisible', { immediate: true })
  public handlePopoverVisible(newVal) {
    this.currentPopoverVisible = newVal;
  }

  private hidePopover() {
    this.currentPopoverVisible = false;
  }

  private toggle() {
    this.currentPopoverVisible = !this.currentPopoverVisible;
  }

  private popoverTriggerControl: Element | null = null;

  public render() {
    const dropdown = this.$slots.default;
    const triggerControl = this.$slots.control;

    const ignoredElementsHandler = () => {
      const el = this.popoverTriggerControl;
      if(el == null) { return []; }
      return [el];
    };

    return (
      <div class='fd-popover'>
        <div class='fd-popover__control' ref={(el: Element) => this.popoverTriggerControl = el}>
          {triggerControl && <div role='button' on-click={this.toggle}>{triggerControl}</div>}
          {!triggerControl &&
            <Button
              class={'fd-popover__control'}
              aria-controls={this.uid}
              aria-expanded={this.currentPopoverVisible}
              aria-haspopup='true'
              on-click={this.toggle}
            >
              {this.title}
            </Button>
          }
        </div>

        <ClickAwayContainer
          id={this.uid}
          staticClass='fd-popover__body'
          class={{
            'fd-popover__body--right': this.placement === 'right',
            'fd-popover__body--no-arrow': this.noArrow,
          }}
          on-clickOutside={this.hidePopover}
          active={this.currentPopoverVisible}
          ignoredElements={ignoredElementsHandler}
          aria-hidden={!this.currentPopoverVisible}
        >
          <Menu on-select={this.handleItemClick}>
            <MenuList>{dropdown}</MenuList>
          </Menu>
        </ClickAwayContainer>
      </div>
    );
  }

  public handleItemClick(value: string | null) {
    this.$emit('click', value);
    this.toggle();
  }
}
