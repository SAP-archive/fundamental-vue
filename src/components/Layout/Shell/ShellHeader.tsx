import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  fixed?: boolean;
}

@Component({ name: componentName('ShellHeader') })
@Api.Component('Shell Header')
@Api.defaultSlot('Header Content')
export class ShellHeader extends TsxComponent<Props> {
  @Prop({type: Boolean, default: false })
  public fixed!: boolean | null;

  private get classes() {
    return ['fd-shell__header'].concat(this.fixed ? ['fd-shell__header--fixed'] : []);
  }

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
