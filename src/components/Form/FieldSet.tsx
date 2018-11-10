import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';
import { Api } from '@/api';

@Component({ name: componentName('FieldSet') })
@Api.defaultSlot('Content of the field set. Usually a legend with a form group.')
export class FieldSet extends TsxComponent<{}> {
  public render() {
    return <fieldset class='fd-form__set'>{this.$slots.default}</fieldset>;
  }
}
