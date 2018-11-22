import {
  Component,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import Vue from 'vue';

@Component({ name: componentName('list-group-item') })
@Api.Component('List Group Item')
@Api.defaultSlot('Content displayed by the item. Usually text.')
@Api.slot('action', 'Custom actions (displayed on the right side, usually a button)')
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
