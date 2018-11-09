import {
  Component,
  Vue,
} from 'vue-property-decorator';

import { componentName } from '@/util';

@Component({ name: componentName('legend') })
export class Legend extends Vue {
  public render() {
    return <legend class='fd-form__legend'>{this.$slots.default}</legend>;
  }
}
