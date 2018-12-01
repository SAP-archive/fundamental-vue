import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

const positionMapping = {
  start: 'start',
  middle: 'middle',
  end: 'end',
};
type Position = keyof typeof positionMapping;
const Positions = Object.keys(positionMapping) as Position[];

interface Props {
  position?: Position;
}

@Component({ name: componentName('ShellBarGroup') })
@Api.defaultSlot('Main Group Content')
export class ShellBarGroup extends TsxComponent<Props> {
  @Api.Prop('position in the shell bar', prop => prop.type(String).acceptValues(...Positions))
  @Prop({ required: true, type: String, validator: value => Positions.includes(value) })
  public position!: Position;

  public render() {
    return <div class={`fd-shellbar__group fd-shellbar__group--${this.position}`}>{this.$slots.default}</div>;
  }
}
