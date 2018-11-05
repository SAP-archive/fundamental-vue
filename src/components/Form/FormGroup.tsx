import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('FormGroup') })
export class FormGroup extends TsxComponent<{}> {
  public render() {
    return <div class='fd-form__group'>{this.$slots.default}</div>;
  }
}
