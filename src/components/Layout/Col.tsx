import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';

@Component({ name: componentName('col') })
export class Col extends Vue {
  @Prop({ type: Number, required: false, default: null }) public span!: number | null;

  public render() {
    const content = this.$slots.default;
    return <div class={this.classes}>{content}</div>;
  }
  private get classes() {
    const span = this.span;
    if (span != null) {
      return { [`fd-col--${span}`]: true };
    }
    return { 'fd-col': true };

  }
}
