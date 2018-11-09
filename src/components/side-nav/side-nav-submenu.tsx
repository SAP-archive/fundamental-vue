import {
  Component,
  Prop,
  Vue,
  Inject,
} from 'vue-property-decorator';
import { SideNavItem } from './side-nav-item';
import { SideNavList } from './side-nav-list';
import { componentName } from '@/util';
import { API } from '@/api';

@Component({
  name: componentName('side-nav-submenu'),
  components: { SideNavItem },
  provide() {
    return {
      submenu: this,
    };
  },
})
@API.Component('Side Nav Submenu')
export class SideNavSubmenu extends Vue {
  @Prop({ type: String, required: true, default: 'Title' }) public title!: string;

  @Prop({ type: String, default: null, required: false })
  @API.Prop('unique item identification', prop => prop.type(String))
  public itemId!: string | null;

  @Inject({ default: null }) public navList!: SideNavList | null;

  private itemsHidden = true;

  public didClickSideNavItem(item: SideNavItem) {
    const list = this.navList;
    if (list != null) {
      list.didClickSideNavItem(item);
    }
    this.itemsHidden = !this.itemsHidden;
  }
  public render() {
    const subitems = this.$slots.default;
    return (
      <vf-side-nav-item itemId={this.itemId} hasChild={true}>
        {this.title}
        <ul slot={'sublist'} class='fd-side-nav__sublist' id='Rk65C501' aria-hidden={this.itemsHidden}>
          {subitems &&
            subitems
          }
        </ul>
      </vf-side-nav-item>
    );
  }
}
