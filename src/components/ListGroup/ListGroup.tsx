import Vue from 'vue';
import { Component, DefaultSlot } from '@/core';

@Component('ListGroup')
@DefaultSlot('List of list group items.')
export class ListGroup extends Vue {
  public render() {
    return (<ul class='fd-list-group'>{this.$slots.default}</ul>);
  }
}
