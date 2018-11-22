import {
  Component,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import Vue from 'vue';

@Component({ name: componentName('list-group') })
@Api.Component('List Group')
@Api.defaultSlot('List of list group items.')
export class ListGroup extends Vue {
  public render() {
    return (<ul class='fd-list-group'>{this.$slots.default}</ul>);
  }
}
