import {
  Component,
  Vue,
} from 'vue-property-decorator';

import { componentName } from '@/util';

@Component({ name: componentName('field-set') })
export class FieldSet extends Vue {
  public render() {
    return <fieldset class='fd-form__set'>{this.$slots.default}</fieldset>;
  }
}
