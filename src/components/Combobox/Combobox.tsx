import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { Api } from '@/api';
import { componentName } from '@/util';
import { clickawayDirective } from '@/mixins';
import { PopoverContent } from './../Popover';
import { Input, InputGroup } from './../Form';

interface Props {
  value?: string | null;
  placeholder?: string;
  ariaLabel?: string;
  popoverVisible?: boolean;
  uid?: string; // Uid mixin
}

@Component({
  directives: {
    onClickaway: clickawayDirective,
  },
  name: componentName('Combobox'),
  provide() {
    return {
      combobox: this,
    };
  },
  components: {
    PopoverContent,
    Input,
    InputGroup,
  },
})
@Api.Component('Combobox', comp => {
  comp.addEvent('input', 'Sent when the selected item changes');
})
export class Combobox extends mixins(Uid) {
  @Api.Prop('initial value', prop => prop.type(String))
  @Prop({ default: null, required: false, type: String })
  public value!: string | null;

  @Api.Prop('placeholder text (displayed when nothing is selected)', prop => prop.type(String))
  @Prop({ type: String, default: '', required: false })
  public placeholder!: string;

  @Api.Prop('ARIA Label', prop => prop.type(String))
  @Prop({ type: String, default: 'Combobox', required: false })
  public ariaLabel!: string;

  @Api.Prop('whether popover is visible', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
  public popoverVisible!: boolean;

  public $tsxProps!: Readonly<{}> & Readonly<Props>;

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

    // tslint:disable-next-line:object-literal-key-quotes
    const renderPopoverContent = () => <PopoverContent {...{'class': 'fd-popover__body--no-arrow'}} visible={this.currentPopoverVisible}>{dropdown}</PopoverContent>;

    return (
      <div class='fd-combobox-input'>
        <div class='fd-popover'>
          <div class='fd-popover__control'>
            <InputGroup afterClass={'fd-input-group__addon--button'}>
              <Input
                id={this.uid}
                nativeOn-click={() => this.currentPopoverVisible = true}
                value={this.value}
                on-input={val => this.setCurrentValue(val)}
                placeholder={this.placeholder}
              />
              <button
                slot='after'
                on-click={() => this.togglePopoverVisible()}
                class='fd-button--icon fd-button--secondary sap-icon--navigation-down-arrow'
              />
            </InputGroup>
          </div>
          {renderPopoverContent()}
        </div>
      </div>
    );
  }
}
