import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { API } from '@/api';
import { ApiProps } from './ApiProps';
import { ApiEvents } from './ApiEvents';
import TsxComponent from '@/vue-tsx';
import { VueConstructor } from 'vue';
import { Tabs, TabItem, Panel } from '@/components';

interface Props {
  component: VueConstructor | null;
  api?: API | null;
}

@Component({
  components: { ApiProps, ApiEvents },
  name: 'ComponentApi',
})
export class ComponentApi extends TsxComponent<Props> {
  // tslint:disable-next-line:ban-types
  @Prop({ type: Function, required: false, default: null })
  public component!: () => {} | null;

  @Prop({ type: API, required: false, default: null })
  public api!: API | null;

  private get _api(): API | null {
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
    if (!(apiFromOptions instanceof API)) {
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
    const isDocumented = props.length > 0 || events.length > 0;
    if (!isDocumented) { return null; }
    const title = `${api.humanName} API`;
    const activeTab = props.length > 0 ? 'props' : 'events';
    return (
      <Panel condensed={true} title={title}>
        <Tabs value={activeTab}>
          {props.length > 0 && <TabItem label='Properties' name='props'><ApiProps apiProps={props} /></TabItem>}
          {events.length > 0 && <TabItem label='Events' name='events'><ApiEvents events={events} /></TabItem>}
        </Tabs>
      </Panel>
    );
  }
}
