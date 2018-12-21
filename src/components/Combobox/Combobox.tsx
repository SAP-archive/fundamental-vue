import { mixins } from 'vue-class-component';
import { UidMixin } from '@/mixins';
import { Popover } from '@/components/Popover';
import { Button } from '@/components/Button';
import { Input, InputGroup } from '@/components/Form';
import { Component, Event, Prop } from '@/core';

interface Props {
  uid?: string; // Uid mixin
  value?: string | null;
  placeholder?: string;
  ariaLabel?: string;
  popoverVisible?: boolean;
  compact?: boolean;
}

@Component('Combobox', {
  provide() {
    return {
      combobox: this,
    };
  },
})
@Event('input', 'Sent when the selected item changes')
export class Combobox extends mixins(UidMixin) {
  @Prop('initial value', { default: null, type: String })
  public value!: string | null;

  @Prop('placeholder text (displayed when nothing is selected)', { type: String, default: '' })
  public placeholder!: string;

  @Prop('ARIA Label', { type: String, default: 'Combobox' })
  public ariaLabel!: string;

  @Prop('whether popover is visible', { type: Boolean, default: false })
  public popoverVisible!: boolean;

  @Prop('whether combobox is compact', { type: Boolean, default: false })
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
