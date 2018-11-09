import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { API } from '@/api';
import { componentName } from '@/util';
import { ComboboxItem } from './ComboboxItem';
import { clickawayDirective } from '@/mixins';
import { PopoverContent } from './../Popover';

interface Suggestion {
  value: unknown;
}

@Component({
  directives: {
    onClickaway: clickawayDirective,
  },
  name: componentName('combobox'),
  provide() {
    return {
      combobox: this,
    };
  },
  components: {
    ComboboxItem,
    PopoverContent,
  },
})
@API.Component('Combobox', comp => {
  comp.addEvent('input', 'Sent when the selected item changes');
})
export class Combobox extends mixins(Uid) {
  @Prop({ default: () => [], required: false, type: Array })
  public suggestions!: Suggestion[];

  @Prop({ default: null, required: false, type: String })
  public value!: string | null;

  @Prop({ type: String, default: '', required: false })
  @API.Prop('placeholder text (displayed when nothing is selected)', prop => prop.type(String))
  public placeholder!: string;

  @Prop({ type: String, default: 'Combobox', required: false })
  @API.Prop('ARIA Label', prop => prop.type(String))
  public ariaLabel!: string;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('Popover Visible', prop => prop.type(Boolean))
  public popoverVisible!: boolean;
  private currentPopoverVisible: boolean = this.popoverVisible;

  private currentValue: string | null = this.value;

  public togglePopoverVisible() {
    this.currentPopoverVisible = !this.currentPopoverVisible;
    this.$emit('update:currentPopoverVisible', this.currentPopoverVisible);
  }

  private setCurrentValue(newValue: string | null) {
    this.currentValue = newValue;
    this.$emit('input', this.currentValue);
    this.$emit('update:value', this.currentValue);
  }

  public render() {
    const dropdown = this.$slots.default;
    return (
      <div class='fd-combobox-input'>
        <div class='fd-popover'>
          <div class='fd-popover__control'>
            <vf-input-group afterClass={'fd-input-group__addon--button'}>
              <vf-input
                id={this.uid}
                nativeOnClick={() => this.currentPopoverVisible = true}
                value={this.value}
                on-input={val => this.setCurrentValue(val)}
                placeholder={this.placeholder}
              />
              <button
                slot='after'
                on-click={() => this.togglePopoverVisible()}
                class='fd-button--icon fd-button--secondary sap-icon--navigation-down-arrow'
              />
            </vf-input-group>
          </div>
          <vf-popover-content class='fd-popover__body--no-arrow' visible={this.currentPopoverVisible}>{dropdown}</vf-popover-content>
        </div>
      </div>
    );
  }
}
