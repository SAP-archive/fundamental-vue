import Vue from 'vue';
import { Slot, Component, DefaultSlot } from '@/core';

@Component('ListGroupItem')
@DefaultSlot('Content displayed by the item. Usually text.')
@Slot('action', 'Custom actions (displayed on the right side, usually a button)')
export class ListGroupItem extends Vue {
  public render() {
    const action = this.$slots.action;
    return (
      <li class='fd-list-group__item'>
        {this.$slots.default}
        {!!action && <span class='fd-list-group__action'>{action}</span>}
      </li>
    );
  }
}
