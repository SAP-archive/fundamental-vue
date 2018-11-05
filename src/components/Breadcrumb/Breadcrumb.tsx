import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { API } from '@/api';

@Component({ name: componentName('Breadcrumb') })
@API.Component('Breadcrumb')
export class Breadcrumb extends Vue {
  public render() {
    return <ul class='fd-breadcrumb'>{this.$slots.default}</ul>;
  }
}
