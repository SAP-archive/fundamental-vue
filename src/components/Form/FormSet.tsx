import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';

@Component({ name: componentName('FormSet') })
export class FormSet extends Vue {
  public render() {
    const items = this.$slots.default;
    return <div class='fd-form__set'>{items}</div>;
  }
}
