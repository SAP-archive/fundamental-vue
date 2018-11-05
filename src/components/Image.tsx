import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';

const sizeMapping = {
  s: 'Small',
  m: 'Medium (default)',
  l: 'Large',
};
type IdentifierSize = keyof (typeof sizeMapping);
const IdentifierSizes = Object.keys(sizeMapping) as IdentifierSize[];

@Component({ name: componentName('image') })
@API.Component('Image')
export class Image extends Vue {
  @Prop({ type: String, default: null, required: false })
  @API.Prop('image url', prop => prop.type(String))
  public url!: string | null;

  @Prop({ type: String, default: 'm', required: false })
  @API.Prop('size', prop => prop.type(String).acceptValues(...IdentifierSizes))
  public size!: IdentifierSize;

  @Prop({ required: false, default: false, type: Boolean })
  @API.Prop('is displayed as circle', prop => prop.type(Boolean))
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
