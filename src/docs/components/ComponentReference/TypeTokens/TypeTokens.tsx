import {
  Prop,
  Component,
} from 'vue-property-decorator';
import { TypeToken } from './TypeToken';
import { Prop as PropType } from 'vue/types/options';
import TsxComponent from '@/vue-tsx';

interface Props {
  propTypes: Array<PropType<any>>;
}

@Component({ name: 'TypeTokens' })
export class TypeTokens extends TsxComponent<Props> {
  @Prop({ type: [Function, Array], required: true })
  public propTypes!: PropType<any> | Array<PropType<any>>;

  public render() {
    const propTypes = this.propTypes;
    const types: Array<PropType<any>> = [];
    if(Array.isArray(propTypes)) {
      types.push(...propTypes);
    } else {
      types.push(propTypes);
    }
    return <span>{types.map(propType => (<TypeToken propType={propType} />))}</span>;
  }
}
