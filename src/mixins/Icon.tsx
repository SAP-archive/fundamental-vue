import {
  Component,
  Prop,
} from 'vue-property-decorator';
import {
  iconClass,
  IconName,
} from '@/lib';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

export interface IconProps {
  icon?: IconName;
}

@Component({
  name: 'Icon',
})
export class Icon extends TsxComponent<IconProps> {
  @Api.Prop('icon name', prop => prop.type(String))
  @Prop({ type: String, default: null })
  public icon!: IconName | null;

  public get iconClassName(): string | null {
    const icon = this.icon;
    if(icon == null) {
      return null;
    }
    return iconClass(icon);
  }
}
