import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

const orientationMapping = {
  horizontal: 'Horizontal Navigation (default)',
  vertical: 'Vertical Navigation',
};
type Orientation = keyof typeof orientationMapping;
const Orientations = Object.keys(orientationMapping) as Orientation[];

interface Props {
  orientation?: Orientation;
}

@Component({ name: componentName('AppNavigation') })
@Api.defaultSlot('Navigation Content')
export class AppNavigation extends TsxComponent<Props> {
  @Prop({ type: String, default: 'horizontal', validator: value => Orientations.includes(value) })
  public orientation!: Orientation;

  private get classes() {
    return ['fd-app__navigation', `fd-app__navigation--${this.orientation}`];
  }
  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
