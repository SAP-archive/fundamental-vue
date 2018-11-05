import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';

@Component({ name: componentName('container') })
export class Container extends Vue {
  @Prop({ type: Boolean, default: false, required: false }) public flex!: boolean;
  @Prop({ type: Boolean, default: false, required: false }) public fluid!: boolean;

  public render() {
    const body = this.$slots.default;
    return <div class={this.classes}>{body}</div>;
  }

  private get classes() {
    return {
      'fd-container': true,
      'fd-container--flex': this.flex,
      'fd-container--fluid': this.fluid,
    };
  }
}
