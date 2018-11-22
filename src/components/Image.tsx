import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

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

@Component({ name: componentName('Image') })
@Api.Component('Image')
export class Image extends TsxComponent<Props> {
  @Api.Prop('image url', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public url!: string | null;

  @Api.Prop('size', prop => prop.type(String).acceptValues(...IdentifierSizes))
  @Prop({ type: String, default: 'm', required: false })
  public size!: IdentifierSize;

  @Api.Prop('is displayed as circle', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
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
