import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { TypeToken } from './TypeToken';
import { PropType } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  propTypes: PropType[];
}

@Component({
  name: 'TypeTokens',
  components: { TypeToken },
})
export class TypeTokens extends TsxComponent<Props> {
  @Prop({ type: Array, required: true })
  public propTypes!: PropType[];

  public render() {
    return <span>{this.propTypes.map(propType => (<TypeToken propType={propType} />))}</span>;
  }
}
