import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

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

@Component({ name: componentName('Badge') })
@Api.Component('Badge')
@Api.defaultSlot('Text displayed inside the badge.')
export class Badge extends TsxComponent<Props> {
  @Api.Prop('whether the badge is filled', prop => prop.type(Boolean))
  @Prop({ type: Boolean, required: false, default: false })
  public filled!: boolean;

  @Api.Prop('whether the badge is displayed as a pill', prop => prop.type(Boolean))
  @Prop({ type: Boolean, required: false, default: false })
  public pill!: boolean;

  @Api.Prop('badge type', prop => prop.type(String).acceptValues(...BadgeTypes))
  @Prop({ type: String, required: false, default: null })
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
