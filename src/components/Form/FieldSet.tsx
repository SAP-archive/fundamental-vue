import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('FieldSet') })
export class FieldSet extends TsxComponent<{}> {
  public render() {
    return <fieldset class='fd-form__set'>{this.$slots.default}</fieldset>;
  }
}
