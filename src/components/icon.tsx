import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import { componentName } from '@/util';
import { API } from '@/api';

const sizeMapping = {
  s: 'Small',
  m: 'Medium',
  l: 'Large',
  xl: 'Extra Large',
};

type IconSize = keyof (typeof sizeMapping);
export const IconSizes = Object.keys(sizeMapping) as IconSize[];

@Component({ name: componentName('icon') })
@API.Component('Icon')
export class Icon extends Vue {
  @Prop({ type: String, required: true })
  @API.Prop('icon name', prop => prop.type(String))
  public name!: string;

  @Prop({ type: String, required: false, default: null })
  @API.Prop('icon size', prop => prop.type(String).acceptValues(...IconSizes))
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
