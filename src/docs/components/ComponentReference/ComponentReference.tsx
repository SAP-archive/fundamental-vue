import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { PropsReference } from './PropsReference';
import { EventsReference } from './EventsReference';
import { SlotsReference } from './SlotsReference';
import TsxComponent from '@/vue-tsx';
import { VueConstructor } from 'vue';
import { Tabs, TabItem, Section } from '@/components';

interface Props {
  component: VueConstructor | null;
  api?: Api | null;
}

@Component({
  components: { PropsReference, EventsReference, SlotsReference },
  name: 'ComponentReference',
})
export class ComponentReference extends TsxComponent<Props> {
  // tslint:disable-next-line:ban-types
  @Prop({ type: Function, required: false, default: null })
  public component!: () => {} | null;

  @Prop({ type: Api, required: false, default: null })
  public api!: Api | null;

  private get _api(): Api | null {
    const api = this.api;
    if (api != null) { return api; }
    const component = this.component;
    if (component == null) {
      return null;
    }

    if (!Reflect.has(component, 'options')) {
      return null;
    }
    const options = Reflect.get(component, 'options');
    if (typeof options !== 'object') {
      return null;
    }
    const apiFromOptions = options.$api;
    if (!(apiFromOptions instanceof Api)) {
      return null;
    }
    return apiFromOptions;
  }

  public render() {
    const api = this._api;
    if (api == null) {
      return null;
    }
    const props = api.props;
    const events = api.events;
    const slots = api.slots;
    const isDocumented = props.length > 0 || events.length > 0 || slots.length > 0;
    if (!isDocumented) { return null; }
    const title = `${api.humanName} API`;

    const activeTab = () => {
      if(props.length > 0) { return 'props'; }
      if(events.length > 0) { return 'events'; }
      if(slots.length > 0) { return 'slots'; }
      return null;
    };

    return (
      <Section v-bg={'neutral-1'} title={title}>
        <Tabs value={activeTab()}>
          {props.length > 0 && <TabItem label='Properties' name='props'><PropsReference apiProps={props} /></TabItem>}
          {events.length > 0 && <TabItem label='Events' name='events'><EventsReference events={events} /></TabItem>}
          {slots.length > 0 && <TabItem label='Slots' name='slots'><SlotsReference apiSlots={slots} /></TabItem>}
        </Tabs>
      </Section>
    );
  }
}
