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

@Component({ name: componentName('ShellFooter') })
@Api.defaultSlot('Footer Content')
export class ShellFooter extends TsxComponent<Props> {
  @Prop({type: Boolean, default: false })
  public fixed!: boolean | null;

  private get classes() {
    return ['fd-shell__footer'].concat(this.fixed ? ['fd-shell__footer--fixed'] : []);
  }

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }
}
