import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

interface Props {
  selected?: boolean;
  disabled?: boolean;
}

@Component({ name: componentName('Link') })
@Api.Component('Link', comp => comp.addEvent('click', 'Sent when link was clicked'))
@Api.defaultSlot('Link Title')
export class Link extends TsxComponent<Props> {
  @Api.Prop('whether link is selected', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
  public selected!: boolean;

  @Api.Prop('whether link is disabled', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
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
