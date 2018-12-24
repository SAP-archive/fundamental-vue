import { Component, Base, Event, Prop } from '@/core';
import { Button } from '@/components/Button';
import { Menu } from '@/components/Menu';
import { Popover } from '@/components/Popover';

interface Props {
  popoverVisible?: boolean;
  icon?: string | null;
  text?: string | null;
  styling?: ButtonStyling;
  ariaLabel?: string | null;
}

const moreIndicatorTypeMapping = {
  icon: `More is indicated by a '…'-icon.`,
  text: `More is indicated by a simple 'More' textual button.`,
};
type MoreIndicatorType = keyof typeof moreIndicatorTypeMapping;
const MoreIndicatorTypes = Object.keys(moreIndicatorTypeMapping) as MoreIndicatorType[];

// Styles
const stylingMapping = {
  emphasized: 'Emphasized',
  light: 'Light',
  regular: 'Regular (default)',
};
type ButtonStyling = keyof (typeof stylingMapping);
const ButtonStylings = Object.keys(stylingMapping) as ButtonStyling[];

@Component('ContextualMenu')
@Event('select', 'triggers when any FdMenuItem displayed by FdContextualMenu was clicked. The argument is the instance of FdMenuItem that was clicked. You can use $event.value in order to get the value.')
export class ContextualMenu extends Base<Props> {
  // Props
  @Prop('more indicator type', {
    type: String,
    default: 'icon',
    validator: MoreIndicatorTypes.includes,
  })
  public moreIndicatorType!: MoreIndicatorType;

  @Prop('button styling', {
    type: String,
    default: 'regular',
    validator: ButtonStylings.includes,
  })
  public styling!: ButtonStyling;

  @Prop('Aria label', {
    type: String,
    default: '',
  })
  public ariaLabel!: string;

  private currentPopoverVisible: boolean = false;

  public togglePopoverVisible() {
    this.currentPopoverVisible = !this.currentPopoverVisible;
  }

  private menuDidSelect(item) {
    this.currentPopoverVisible = false;
    this.$emit('select', item);
  }

  public render() {
    const menuListsOrItems = this.$slots.default;

    const attrs = {
        icon: this.moreIndicatorType === 'icon' ? 'overflow' : null,
    };

    return (
      <Popover noArrow={false} popoverVisible={this.currentPopoverVisible}>
        <Button
          {...{attrs}}
          slot='control'
          aria-label={this.ariaLabel}
          on-click={this.togglePopoverVisible}
          styling={this.styling}
        >
          {this.moreIndicatorType === 'text' && 'More'}
        </Button>
        <Menu on-select={this.menuDidSelect}>
          {menuListsOrItems}
        </Menu>
      </Popover>
    );
  }
}
