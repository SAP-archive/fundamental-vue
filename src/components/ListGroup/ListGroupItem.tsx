import {
  Component,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';
import Vue from 'vue';

@Component({ name: componentName('list-group-item') })
@API.Component('List Group Item')
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
