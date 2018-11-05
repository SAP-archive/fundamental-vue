import {
  Component,
  Prop,
  Inject,
} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { API } from '@/api';
import { componentName } from '@/util';
import { TabItemContainer } from './TabItemContainer';
import { Uid } from '@/mixins';

@Component({ name: componentName('tab-item') })
@API.Component('Tab Item')
export class TabItem extends mixins(Uid) {

  @Prop({ type: String, default: null, required: false })
  @API.Prop('label', prop => prop.type(String))
  public label!: string | null;

  @Prop({ type: String, default: null, required: false })
  @API.Prop('name', prop => prop.type(String))
  public name!: string | null;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('disabled', prop => prop.type(Boolean))
  public disabled!: boolean;

  @Inject('tabItemContainer')
  public tabItemContainer!: TabItemContainer | null;

  public mounted() {
    const { tabItemContainer } = this;
    if (tabItemContainer != null) {
      tabItemContainer.addTabItem(this);
    }
  }

  public destroyed() {
    const { tabItemContainer } = this;
    if (tabItemContainer != null) {
      tabItemContainer.removeTabItem(this);
    }
  }

  public get active(): boolean {
    const { tabItemContainer } = this;
    if (tabItemContainer != null) {
      const { activeName } = tabItemContainer;
      return activeName === this.name;
    }
    return false;
  }

  public render() {
    const expanded = this.active ? 'true' : 'false';

    return (
      <div
        id={this.uid}
        role='tabpanel'
        class='fd-tabs__panel'
        aria-expanded={expanded}
      >
        {this.$slots.default}
      </div>
    );
  }
}
