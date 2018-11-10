import { Component, Watch, Prop, Vue } from 'vue-property-decorator';
import { Menu, MenuList, MenuItem } from '@/components';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { componentName } from '@/util';
import { Api } from '@/api';
import { clickawayDirective } from '@/mixins';

interface Props {
  visible?: boolean;
  uid?: string; // Uid mixin
}

@Component({
  directives: {
    onClickaway: clickawayDirective,
  },
  name: componentName('PopoverContent'),
  components: { Menu, MenuList, MenuItem },
})
@Api.Component('Popover Content', comp => {
  comp
    .addEvent('item-click', 'Sent when an item in the popover was clicked', event => {
      event.raw('item', 'MenuItem');
    });
})
export class PopoverContent extends mixins(Uid) {
  @Api.Prop('whether visible', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
  public visible!: boolean;

  public $tsxProps!: Readonly<{}> & Readonly<Props>;

  public currentVisible: boolean = this.visible;
  private setCurrentVisible(visible: boolean) {
    Vue.set(this, 'currentVisible', visible);
    this.$emit('update:visible', this.currentVisible);
    this.$emit('input', this.currentVisible);
  }

  @Watch('visible')
  public handleIsShown(newVal) {
    this.setCurrentVisible(newVal);
  }

  private get ariaHidden(): string {
    return this.currentVisible ? 'false' : 'true';
  }
  public render() {
    const items = this.$slots.default;
    return (
      <div
        class='fd-popover__body'
        aria-hidden={this.ariaHidden}
        v-show={this.currentVisible}
        id={this.uid}
        v-on-clickaway={this.clickOutside}
      >
        <Menu>
          <MenuList on-select={val => this.handleItemClick(val)}>
            {items}
          </MenuList>
        </Menu>
      </div>
    );
  }

  private clickOutside() {
    if (this.currentVisible) {
      this.setCurrentVisible(!this.currentVisible);
    }
  }

  public handleItemClick(value: string | null) {
    this.$emit('select', value);
    this.setCurrentVisible(false);
  }
}
