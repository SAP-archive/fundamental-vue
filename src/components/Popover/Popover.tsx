import { Component, Watch, Prop } from 'vue-property-decorator';
import { Menu, MenuList, MenuItem } from './../Menu';
import { Button } from './../Button';
import { PopoverContent } from './PopoverContent';
import Vue from 'vue';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { componentName } from '@/util';
import { Api } from '@/api';
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
@Api.Component('Popover', comp => {
  comp
    .addEvent('item-click', 'Sent when an item in the popover was clicked', event => {
      event.raw('item', 'MenuItem');
    });
})
export class Popover extends mixins(Uid) {
  @Api.Prop('ARIA label', prop => prop.type(String))
  @Prop({ type: String, default: 'Popover', required: false })
  public ariaLabel!: string;

  @Api.Prop('Title displayed when no custom trigger element is used', prop => prop.type(String))
  @Prop({ type: String, default: 'Show', required: false })
  public title!: string;

  @Api.Prop('if popover is visible', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
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
          <Button
            aria-controls={this.uid}
            styling='light'
            on-click={() => this.togglePopoverVisible()}
          >
            {this.title}
          </Button>
        </div>
        <PopoverContent
          aria-controls={this.uid}
          visible={this.currentPopoverVisible}
          {...popoverContentHandler}
        >
          {dropdown}
        </PopoverContent>
      </div>
    );
  }
}
