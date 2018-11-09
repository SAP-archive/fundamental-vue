import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { API } from '@/api';

const typeMapping = {
  warning: 'Warning',
  error: 'Error',
  success: 'Success',
};
type BadgeType = keyof (typeof typeMapping);
const BadgeTypes = Object.keys(typeMapping) as BadgeType[];

@Component({ name: componentName('badge') })
@API.Component('Badge')
export class Badge extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  @API.Prop('whether the badge is filled', prop => prop.type(Boolean))
  public filled!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  @API.Prop('whether the badge is displayed as a pill', prop => prop.type(Boolean))
  public pill!: boolean;

  @Prop({ type: String, required: false, default: null })
  @API.Prop('badge type', prop => prop.type(String).acceptValues(...BadgeTypes))
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
