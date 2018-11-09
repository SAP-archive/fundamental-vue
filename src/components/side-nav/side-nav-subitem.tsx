import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { SideNavItem } from './side-nav-item';
import { componentName } from '@/util';
import { API } from '@/api';

@Component({
  components: { SideNavItem },
  name: componentName('side-nav-subitem'),
})
@API.Component('Side Nav Subitem')
export class SideNavSubitem extends Vue {
  @Prop({ type: String, default: null, required: false })
  @API.Prop('unique item identification', prop => prop.type(String))
  public itemId!: string | null;

  public render() {
    const title = this.$slots.default;

    return (
      <vf-side-nav-item
        on-click={() => this.$emit('click', this)}
        itemId={this.itemId}
        isSubitem={true}
      >
        {title}
      </vf-side-nav-item>
    );
  }
}
