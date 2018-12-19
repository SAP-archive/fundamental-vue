import { Slot, Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  before?: string | null;
  after?: string | null;
  afterClass?: string | null;
  compact?: boolean;
}

@Component('InputGroup')
@Slot('before', 'Content to be placed before the input component.')
@Slot('after', 'Content to be placed after the input component.')
@DefaultSlot('The input component placed in the input group.')
export class InputGroup extends Base<Props> {
  @Prop('text/number before the input', { type: String, default: null })
  public before!: string | null;

  @Prop('text/number after the input', { type: String, default: null })
  public after!: string | null;

  @Prop({ type: String, default: null })
  public afterClass!: string | null;

  @Prop('whether input group is compact', { type: Boolean, default: false })
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
