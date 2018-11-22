import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';

@Component({ name: componentName('Legend') })
@Api.defaultSlot('Legend text')
export class Legend extends Vue {
  public render() {
    return <legend class='fd-form__legend'>{this.$slots.default}</legend>;
  }
}
