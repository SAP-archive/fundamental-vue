import {
  Component,
  Vue,
} from 'vue-property-decorator';

import { componentName } from '@/util';

@Component({ name: componentName('form-group') })
export class FormGroup extends Vue {
  public render() {
    return <div class='fd-form__group'>{this.$slots.default}</div>;
  }
}
