import {
  Prop,
  Component,
} from 'vue-property-decorator';
import { TypeToken } from './TypeToken';
import { TsxComponent } from '@/vue-tsx';
import { PropType } from '@/api/Model/PropDocumentation';

interface Props {
  propTypes: PropType[];
}

@Component({ name: 'TypeTokens' })
export class TypeTokens extends TsxComponent<Props> {
  @Prop({ type: [Function, Array], required: true })
  public propTypes!: PropType[];

  public render() {
    const propTypes = this.propTypes;
    return <span>{propTypes.map(propType => (<TypeToken propType={propType} />))}</span>;
  }
}
