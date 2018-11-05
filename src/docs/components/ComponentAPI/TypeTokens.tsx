import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import { TypeToken } from './TypeToken';
import { PropType } from '@/api';
@Component({
  name: 'type-tokens',
  components: { TypeToken },
})
export class TypeTokens extends Vue {
  @Prop({ type: Array, required: true })
  public propTypes!: PropType[];
  public render() {
    return <span>{this.propTypes.map(propType => (<type-token propType={propType} />))}</span>;
  }
}
