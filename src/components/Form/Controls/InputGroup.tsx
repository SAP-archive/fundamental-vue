import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  before?: string | null;
  after?: string | null;
  afterClass?: string | null;
  compact?: boolean;
}

@Component({ name: componentName('InputGroup') })
@Api.Component('InputGroup')
@Api.slot('before', 'Content to be placed before the input component.')
@Api.slot('after', 'Content to be placed after the input component.')
@Api.defaultSlot('The input component placed in the input group.')
export class InputGroup extends TsxComponent<Props> {
  @Api.Prop('text/number before the input', prop => prop.type(String, Number))
  @Prop({ type: String, required: false, default: null })
  public before!: string | null;

  @Api.Prop('text/number after the input', prop => prop.type(String, Number))
  @Prop({ type: String, required: false, default: null })
  public after!: string | null;

  @Prop({ type: String, required: false, default: null })
  public afterClass!: string | null;

  @Api.Prop('whether input group is compact', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false })
  public compact!: boolean;

  public render() {
    const beforeAddon = this.before || this.$slots.before;
    const afterAddon = this.after || this.$slots.after;
    const afterClass = this.afterClass || '';
    const ws = this.afterClass ? ' ' : '';
    const afterAddonClassName = 'fd-input-group__addon fd-input-group__addon--after' + ws + afterClass;
    return (
      <div staticClass='fd-input-group' class={this.classes}>
        {beforeAddon && <span class='fd-input-group__addon fd-input-group__addon--before'>{beforeAddon}</span>}
        {this.$slots.default}
        {afterAddon && <span class={afterAddonClassName}>{afterAddon}</span>}
      </div>
    );
  }

  private get classes() {
    return {
      'fd-input-group--before': this.before || this.$slots.before,
      'fd-input-group--after': this.after || this.$slots.after,
      'fd-input-group--compact': this.compact,
    };
  }
}
