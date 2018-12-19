import { Prop, Component } from 'vue-property-decorator';
import { ComponentDocumentation } from '@/api';
import { PropsReference } from './PropsReference';
import { EventsReference } from './EventsReference';
import { SlotsReference } from './SlotsReference';
import { VueConstructor } from 'vue';
import { Tabs, TabItem, Section } from '@/components';
import TsxComponent from '@/vue-tsx';

interface Props {
  component: VueConstructor | null;
  api: ComponentDocumentation | null;
}

@Component( {
  name: 'ComponentReference',
})
export class ComponentReference extends TsxComponent<Props> {
  @Prop({ type: Function, default: null })
  public component!: () => {} | null;

  @Prop({ type: ComponentDocumentation, default: null })
  public api!: ComponentDocumentation | null;

  public render() {
    const api = this.api;
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
