import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';

import { Color, Colors, backgroundColorClassName } from '@/lib';

const sizeMapping = {
  s: 'Small',
  m: 'Medium (default)',
  l: 'Large',
};
type IdentifierSize = keyof (typeof sizeMapping);
const IdentifierSizes = Object.keys(sizeMapping) as IdentifierSize[];

@Component({ name: componentName('identifier') })
@API.Component('Identifier')
export class Identifier extends Vue {
  @Prop({ type: String, default: null, required: false })
  @API.Prop('icon name', prop => prop.type(String))
  public icon!: string | null;

  @Prop({ type: String, default: 'm', required: false })
  @API.Prop('size', prop => prop.type(String).acceptValues(...IdentifierSizes))
  public size!: IdentifierSize;

  @Prop({ required: false, default: false, type: Boolean })
  @API.Prop('is displayed as circle', prop => prop.type(Boolean))
  public circle!: boolean;

  @Prop({ required: false, default: false, type: Boolean })
  @API.Prop('is displayed without background', prop => prop.type(Boolean))
  public transparent!: boolean;

  @Prop({ required: false, default: null, type: String })
  @API.Prop('background color', prop => prop.type(String).acceptValues(...Colors))
  public backgroundColor!: Color | null;

  public render() {
    return <span class={this.classes} role='presentation'>{this.$slots.default}</span>;
  }

  private get classes() {
    const backgroundColorClasses = this.backgroundColor == null ? {} : { [backgroundColorClassName(this.backgroundColor)]: true };
    const iconClass = this.icon == null ? {} : { [`sap-icon--${this.icon}`]: true };
    return {
      ...iconClass,
      ...backgroundColorClasses,
      'fd-identifier--s': this.size === 's',
      'fd-identifier--l': this.size === 'l',
      'fd-identifier--m': this.size === 'm',
      'fd-identifier--transparent': this.transparent,
      'fd-identifier--circle': this.circle,
    };
  }
}
