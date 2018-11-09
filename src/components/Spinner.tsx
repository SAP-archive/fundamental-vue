import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';

@Component({ name: componentName('spinner') })
@API.Component('Spinner')
export class Spinner extends Vue {
  @Prop({ type: String, default: 'Loading', required: false })
  @API.Prop('ARIA label', prop => prop.type(String))
  public ariaLabel!: string;

  public render() {
    return (
      <div class='fd-spinner' aria-hidden='false' aria-label={this.ariaLabel}>
        <div />
      </div>
    );
  }
}
