import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';
import { Api } from '@/api';

interface Props {
  span?: number | null;
}

@Component({ name: componentName('Col') })
@Api.defaultSlot('Column content')
export class Col extends TsxComponent<Props> {
  @Prop({ type: Number, required: false, default: null })
  public span!: number | null;

  public render() {
    const content = this.$slots.default;
    return <div class={this.classes}>{content}</div>;
  }

  private get classes() {
    const colClass = 'fd-col';
    const span = this.span;
    if (span != null) {
      return [colClass, `fd-col--${span}`];
    }
    return [colClass];
  }
}
