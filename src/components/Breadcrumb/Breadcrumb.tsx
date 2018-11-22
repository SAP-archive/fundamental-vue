import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';

@Component({ name: componentName('Breadcrumb') })
@Api.Component('Breadcrumb')
@Api.defaultSlot('Breadcrumb Items')
export class Breadcrumb extends Vue {
  public render() {
    return <ul class='fd-breadcrumb'>{this.$slots.default}</ul>;
  }
}
