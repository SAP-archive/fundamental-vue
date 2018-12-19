import { Component, DefaultSlot, Prop, Base } from '@/core';

const typeMapping = {
  warning: 'Warning',
  error: 'Error',
  success: 'Success',
};
type BadgeType = keyof (typeof typeMapping);
const BadgeTypes = Object.keys(typeMapping) as BadgeType[];

interface Props {
  filled?: boolean;
  pill?: boolean;
  type?: BadgeType | null;
}

@Component('Badge')
@DefaultSlot('Text displayed inside the badge.')
export class Badge extends Base<Props> {
  @Prop('whether the badge is filled', { type: Boolean, default: false })
  public filled!: boolean;

  @Prop('whether the badge is displayed as a pill', { type: Boolean, default: false })
  public pill!: boolean;

  @Prop('badge type', { acceptableValues: BadgeTypes, type: String, default: null })
  public type!: BadgeType | null;

  public render() {
    return <span class={this.classes}>{this.$slots.default}</span>;
  }

  private get classes() {
    return {
      'fd-badge': true,
      'fd-badge--filled': this.filled,
      'fd-badge--pill': this.pill,
      'fd-badge--success': this.type === 'success',
      'fd-badge--warning': this.type === 'warning',
      'fd-badge--error': this.type === 'error',
    };
  }
}
