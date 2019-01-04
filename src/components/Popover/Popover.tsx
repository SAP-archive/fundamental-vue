import { Watch } from 'vue-property-decorator';
import { Menu, MenuList } from './../Menu';
import { Button } from './../Button';
import { mixins } from 'vue-class-component';
import { UidMixin } from '@/mixins';
import { ClickAwayContainer } from '@/components/ClickAwayContainer';
import { Slot, Model, Component, Event, DefaultSlot, Prop } from '@/core';

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

@Component('Popover')
@DefaultSlot('MenuItems or custom content via the body-slot')
@Slot('body', 'Custom popover body')
@Event('click', 'Sent when an item in the popover was clicked', ['value', 'MenuItem value'])
export class Popover extends mixins(UidMixin) {
  @Prop('ARIA label', { type: String, default: 'Popover' })
  public ariaLabel!: string;

  @Prop('title displayed when no custom trigger element is used', { type: String, default: 'Show' })
  public title!: string;

  @Prop('popover placement', { type: String, default: 'left', validator: value => PopoverPlacements.includes(value) })
  public placement!: PopoverPlacement;

  @Model('whether popover is visible', { event: 'visible', type: Boolean, default: false })
  public popoverVisible!: boolean;

  @Prop('whether popover has an arrow', { type: Boolean, default: false })
  public noArrow!: boolean;

  public currentPopoverVisible: boolean = this.popoverVisible;
  public $tsxProps!: Readonly<{}> & Readonly<Props>;

  @Watch('popoverVisible', { immediate: true })
  public handlePopoverVisible(newVal) {
    this.currentPopoverVisible = newVal;
    this.$emit('visible', this.currentPopoverVisible);
  }

  private hidePopover() {
    this.currentPopoverVisible = false;
    this.$emit('visible', this.currentPopoverVisible);
  }

  private toggle() {
    this.currentPopoverVisible = !this.currentPopoverVisible;
    this.$emit('visible', this.currentPopoverVisible);
  }

  private popoverTriggerControl: Element | null = null;

  public render() {
    const dropdown = this.$slots.default || [];
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
              class='fd-popover__control'
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
        {this.$slots.body ? this.$slots.body :
          <Menu on-select={this.handleItemClick}>
            <MenuList>{dropdown}</MenuList>
          </Menu>
        }
        </ClickAwayContainer>
      </div>
    );
  }

  public handleItemClick(value: string | null) {
    this.$emit('click', value);
    this.toggle();
  }
}
