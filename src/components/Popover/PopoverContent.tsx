import { Component, Watch, Prop } from 'vue-property-decorator';
import { Menu, MenuList, MenuItem } from '@/components';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { componentName } from '@/util';
import { API } from '@/api';
import '@/components/fade-animation.css';
import { clickawayDirective } from '@/mixins';
import Vue from 'vue';
@Component({
  directives: {
    onClickaway: clickawayDirective,
  },
  name: componentName('popover-content'),
  components: { Menu, MenuList, MenuItem },
})
@API.Component('Popover Content', comp => {
  comp
    .addEvent('item-click', 'Sent when an item in the popover was clicked', event => {
      event.raw('item', 'MenuItem');
    });
})
export class PopoverContent extends mixins(Uid) {
  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('if visible', prop => prop.type(Boolean))
  public visible!: boolean;

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
        <vf-menu>
          <vf-menu-list on-select={val => this.handleItemClick(val)}>
            {items}
          </vf-menu-list>
        </vf-menu>
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
