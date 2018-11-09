import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';

@Component({ name: componentName('link') })
@API.Component('Link', comp => comp.addEvent('click', 'Sent when link was clicked'))
export class Link extends Vue {
  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('whether link is selected', prop => prop.type(Boolean))
  public selected!: boolean;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('whether link is disabled', prop => prop.type(Boolean))
  public disabled!: boolean;

  public render() {
    const attributes = {
      attrs: this.$attrs,
      on: this.$listeners,
    };
    return (
      <a
        class={this.classes}
        {...attributes}
      >
        {this.$slots.default}
      </a>
    );
  }

  private get classes() {
    return {
      'fd-link': true,
      'is-selected': this.selected,
      'is-disabled': this.disabled,
    };
  }
}
