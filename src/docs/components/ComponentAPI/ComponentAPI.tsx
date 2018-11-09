import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';

import { API } from '@/api';
import { APIProps } from './APIProps';
import { APIEvents } from './APIEvents';

@Component({
  components: { APIProps, APIEvents },
  name: 'component-api',
})
export class ComponentAPI extends Vue {
  // tslint:disable-next-line:ban-types
  @Prop({ type: Function, required: false, default: null }) public component!: Function | null;
  @Prop({ type: API, required: false, default: null }) public api!: API | null;

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
      <vf-panel condensed={true} title={title}>
        <vf-tabs value={activeTab}>
          {props.length > 0 && <vf-tab-item label='Properties' name='props'><api-props apiProps={props} /></vf-tab-item>}
          {events.length > 0 && <vf-tab-item label='Events' name='events'><api-events events={events} /></vf-tab-item>}
        </vf-tabs>
      </vf-panel>
    );
  }
}
