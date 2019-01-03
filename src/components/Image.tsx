import { Component, Prop, Base } from '@/core';

const sizeMapping = {
  s: 'Small',
  m: 'Medium (default)',
  l: 'Large',
};
type IdentifierSize = keyof (typeof sizeMapping);
const IdentifierSizes = Object.keys(sizeMapping) as IdentifierSize[];

interface Props {
  url?: string | null;
  size?: IdentifierSize;
  circle?: boolean;
}

@Component('Image')
export class Image extends Base<Props> {
  @Prop('image url', { type: String, default: null })
  public url!: string | null;

  @Prop({ acceptableValues: IdentifierSizes, type: String, default: 'm' })
  public size!: IdentifierSize;

  @Prop('is displayed as circle', { type: Boolean, default: false })
  public circle!: boolean;

  public render() {
    return <span class={this.classes} style={this.style}>{this.$slots.default}</span>;
  }

  private get style() {
    const url = this.url;
    if (url == null) { return {}; }
    return {
      'background-image': `url(${this.url})`,
    };
  }

  private get classes() {
    return {
      'fd-image--s': this.size === 's',
      'fd-image--l': this.size === 'l',
      'fd-image--m': this.size === 'm',
      'fd-image--circle': this.circle,
    };
  }
}
