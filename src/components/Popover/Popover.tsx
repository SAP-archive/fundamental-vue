import { Component, Watch, Prop } from 'vue-property-decorator';
import { Menu, MenuList, MenuItem } from './../Menu';
import {
  Button,
} from './../Button';
import { PopoverContent } from './PopoverContent';

import Vue from 'vue';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { componentName } from '@/util';
import { API } from '@/api';
import '@/components/fade-animation.css';
import { clickawayDirective } from '@/mixins';

@Component({
  directives: {
    onClickaway: clickawayDirective,
  },
  name: componentName('popover'),
  components: {
    Button,
    Menu,
    MenuList,
    MenuItem,
    PopoverContent,
  },
})
@API.Component('Popover', comp => {
  comp
    .addEvent('item-click', 'Sent when an item in the popover was clicked', event => {
      event.raw('item', 'MenuItem');
    });
})
export class Popover extends mixins(Uid) {
  @Prop({ type: String, default: 'Popover', required: false })
  @API.Prop('ARIA label', prop => prop.type(String))
  public ariaLabel!: string;

  @Prop({ type: String, default: 'Show', required: false })
  @API.Prop('Title displayed when no custom trigger element is used', prop => prop.type(String))
  public title!: string;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('if popover is visible', prop => prop.type(Boolean))
  public popoverVisible!: boolean;

  public currentPopoverVisible: boolean = this.popoverVisible;

  @Watch('popoverVisible', { immediate: true })
  public handlePopoverVisible(newVal) {
    this.currentPopoverVisible = newVal;
  }

  private _setPopoverVisible(visible: boolean) {
    this.currentPopoverVisible = visible;
    Vue.set(this, 'currentPopoverVisible', this.currentPopoverVisible);
  }

  private togglePopoverVisible() {
    this._setPopoverVisible(!this.currentPopoverVisible);
  }

  public render() {
    const dropdown = this.$slots.default;
    const updateVisibile = (newVal: boolean) => {
      this._setPopoverVisible(newVal);
    };
    const popoverContentHandler = {
      on: {
        'update:visible': updateVisibile,
      },
    };
    return (
      <div class='fd-popover'>
        <div class='fd-popover__control'>
          <vf-button
            aria-controls={this.uid}
            styling='light'
            on-click={() => this.togglePopoverVisible()}
          >
            {this.title}
          </vf-button>
        </div>
        <vf-popover-content
          aria-controls={this.uid}
          visible={this.currentPopoverVisible}
          {...popoverContentHandler}
        >
          {dropdown}
        </vf-popover-content>
      </div>
    );
  }
}
