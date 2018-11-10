import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';
import { Api } from '@/api';

@Component({ name: componentName('FormGroup') })
@Api.defaultSlot('Content of the form group. Usually form items.')
export class FormGroup extends TsxComponent<{}> {
  public render() {
    return <div class='fd-form__group'>{this.$slots.default}</div>;
  }
}
