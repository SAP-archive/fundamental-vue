import { Component, Event, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  selected?: boolean;
  disabled?: boolean;
}

@Component('Link')
@Event('click', 'Sent when link was clicked')
@DefaultSlot('Link Title')
export class Link extends Base<Props> {
  @Prop('whether link is selected', { type: Boolean, default: false })
  public selected!: boolean;

  @Prop('whether link is disabled', { type: Boolean, default: false })
  public disabled!: boolean;

  public render() {
    const attributes = {
      attrs: this.$attrs,
      on: this.$listeners,
    };
    return (
      <a
        class={this.classes}
        {...attributes}
      >
        {this.$slots.default}
      </a>
    );
  }

  private get classes() {
    return {
      'fd-link': true,
      'is-selected': this.selected,
      'is-disabled': this.disabled,
    };
  }
}
