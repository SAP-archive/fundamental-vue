import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

interface Props {
  ariaLabel?: string;
}

@Component({ name: componentName('Spinner') })
@Api.Component('Spinner')
export class Spinner extends TsxComponent<Props> {
  @Api.Prop('ARIA label', prop => prop.type(String))
  @Prop({ type: String, default: 'Loading', required: false })
  public ariaLabel!: string;

  public render() {
    return (
      <div class='fd-spinner' aria-hidden='false' aria-label={this.ariaLabel}>
        <div />
      </div>
    );
  }
}
