import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';

@Component({ name: componentName('FormSet') })
@Api.Component('Form Set')
@Api.defaultSlot('Content of the form set (usually form items).')
export class FormSet extends Vue {
  public render() {
    const items = this.$slots.default;
    return <div class='fd-form__set'>{items}</div>;
  }
}
