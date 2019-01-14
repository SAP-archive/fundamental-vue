import { mixins } from 'vue-class-component';
import { UidMixin } from '@/mixins';
import { MenuItem, Button, Popover, Input, InputGroup } from '@/components';
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
  private currentValue: string | number | null = this.value;

  public togglePopoverVisible() {
    this.currentPopoverVisible = !this.currentPopoverVisible;
  }

  private setCurrentValue(newValue: string | number | null) {
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

  private handleMenuItemClick(item: MenuItem) {
    this.setCurrentValue(item.value);
  }

  public render() {
    const dropdown = this.$slots.default;
    return (
      <div class='fd-combobox-input'>
        <Popover
          on-click={this.handleMenuItemClick}
          noArrow={true}
          popoverVisible={this.currentPopoverVisible}
          on-visible={(visible: boolean) => this.currentPopoverVisible = visible }
            {...
              {
                scopedSlots: {
                  control: (scope: { toggle: () => (void) }) => {
                    return (<div staticClass='fd-combobox-control'>
                    <InputGroup
                      compact={this.compact}
                      afterClass='fd-input-group__addon--button'
                    >
                      <Input
                        id={this.uid}
                        value={this.value}
                        compact={this.compact}
                        nativeOn-click={scope.toggle}
                        nativeOn-keyup={this.handleKeyup}
                        on-input={this.setCurrentValue}
                        placeholder={this.placeholder}
                      />
                    <Button
                      slot='after'
                      on-click={scope.toggle}
                      icon='navigation-down-arrow'
                      styling='light'
                    />
                    </InputGroup></div>
                  );
                  },
                },
              }
            }
        >
          {dropdown}
        </Popover>
      </div>
    );
  }
}
