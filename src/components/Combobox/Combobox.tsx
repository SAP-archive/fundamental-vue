import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { Uid } from '@/mixins';
import { Api } from '@/api';
import { componentName } from '@/util';
import { Popover } from '@/components/Popover';
import { Button } from '@/components/Button';
import { Input, InputGroup } from '@/components/Form';
import { ClickAwayContainer } from '@/components/ClickAwayContainer';

interface Props {
  uid?: string; // Uid mixin
  value?: string | null;
  placeholder?: string;
  ariaLabel?: string;
  popoverVisible?: boolean;
  compact?: boolean;
}

@Component({
  name: componentName('Combobox'),
  provide() {
    return {
      combobox: this,
    };
  },
  components: {
    ClickAwayContainer,
    Popover,
    Input,
    InputGroup,
    Button,
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

  @Api.Prop('whether combobox is compact', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false })
  public compact!: boolean;

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

  private handleKeyup({ keyCode }: KeyboardEvent) {
    if(keyCode !== 13) {
      return;
    }
    if(this.currentPopoverVisible) {
      this.togglePopoverVisible();
    }
  }

  public render() {
    const dropdown = this.$slots.default;
    return (
      <div class='fd-combobox-input'>
        <Popover noArrow={true} popoverVisible={this.currentPopoverVisible}>
          <div class='fd-combobox-control' slot='control'>
            <InputGroup compact={this.compact} afterClass={'fd-input-group__addon--button'}>
              <Input
                id={this.uid}
                value={this.value}
                compact={this.compact}
                nativeOn-click={() => this.currentPopoverVisible = true}
                nativeOn-keyup={this.handleKeyup}
                on-input={this.setCurrentValue}
                placeholder={this.placeholder}
              />
              <Button
                slot='after'
                on-click={this.togglePopoverVisible}
                icon='navigation-down-arrow'
                styling='light'
              />
            </InputGroup>
          </div>
          {dropdown}
        </Popover>
      </div>
    );
  }
}
