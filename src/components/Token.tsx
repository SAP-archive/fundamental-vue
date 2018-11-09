import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';

@Component({ name: componentName('token') })
@API.Component('Token', comp => comp.addEvent('click', 'triggers when clicked'))
export class Token extends Vue {
  public render() {
    return (
      <span
        class='fd-token'
        role='button'
        on-click={() => this.$emit('click', this)}
      >
        {this.$slots.default}
      </span>
    );
  }
}
