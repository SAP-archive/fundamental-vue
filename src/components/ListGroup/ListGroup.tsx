import {
  Component,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';
import Vue from 'vue';

@Component({ name: componentName('list-group') })
@API.Component('List Group')
export class ListGroup extends Vue {
  public render() {
    return (<ul class='fd-list-group'>{this.$slots.default}</ul>);
  }
}
