import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

const sizeMapping = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
  xl: 'Extra Large',
};
type IconSize = keyof (typeof sizeMapping);
export const IconSizes = Object.keys(sizeMapping) as IconSize[];

interface Props {
  name?: string;
  size?: IconSize | null;
}

@Component({ name: componentName('Icon') })
@Api.Component('Icon')
export class Icon extends TsxComponent<Props> {
  @Api.Prop('icon name', prop => prop.type(String))
  @Prop({ type: String, required: true })
  public name!: string;

  @Api.Prop('icon size', prop => prop.type(String).acceptValues(...IconSizes))
  @Prop({ type: String, required: false, default: null })
  public size!: IconSize | null;

  public render() {
    return <span class={this.classes} />;
  }

  private get classes() {
    return {
      [`sap-icon--${this.name}`]: true,
      // Sizes
      'sap-icon--s': this.size === 's',
      'sap-icon--m': this.size === 'm',
      'sap-icon--l': this.size === 'l',
      'sap-icon--xl': this.size === 'xl',
    };
  }
}
