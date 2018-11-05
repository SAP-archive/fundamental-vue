import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { SideNavItem } from './SideNavItem';
import { componentName } from '@/util';
import { API } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  itemId?: string | null;
}

@Component({
  components: { SideNavItem },
  name: componentName('SideNavSubitem'),
})
@API.Component('Side Nav Subitem')
export class SideNavSubitem extends TsxComponent<Props> {
  @API.Prop('unique item identification', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public itemId!: string | null;

  public render() {
    const title = this.$slots.default;
    return (
      <SideNavItem
        on-click={() => this.$emit('click', this)}
        itemId={this.itemId}
        isSubitem={true}
      >
        {title}
      </SideNavItem>
    );
  }
}
