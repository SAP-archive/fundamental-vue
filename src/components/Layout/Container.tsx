import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';
import { Api } from '@/api';

interface Props {
  flex?: boolean;
  fluid?: boolean;
}

@Component({ name: componentName('Container') })
@Api.defaultSlot('Content displaye by the container.')
export class Container extends TsxComponent<Props> {
  @Prop({ type: Boolean, default: false, required: false })
  public flex!: boolean;

  @Prop({ type: Boolean, default: false, required: false })
  public fluid!: boolean;

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
