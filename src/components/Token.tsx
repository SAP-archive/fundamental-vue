import { Component, Event, DefaultSlot, Base } from '@/core';

@Component('Token')
@Event('click', 'triggers when clicked')
@DefaultSlot('Token Text')
export class Token extends Base<{}> {
  public render() {
    return (
      <span
        class='fd-token'
        role='button'
        on-click={() => this.$emit('click', this)}
      >
        {this.$slots.default}
      </span>
    );
  }
}
