import { createDecorator } from 'vue-class-component';
import { APIProp } from './APIProp';
import { APIEvent } from './APIEvent';

type PropBuilder = (builder: APIProp) => void;
type EventBuilder = (builder: APIEvent) => void;
type ComponentBuilder = (builder: API) => void;

export class API {
  public readonly props: APIProp[] = [];
  public readonly events: APIEvent[] = [];
  constructor(public humanName?: string) { }

  public addProp(prop: APIProp) {
    this.props.push(prop);
  }

  public addEvent(name: string, description: string, build: EventBuilder = () => { }): this {
    const event = new APIEvent(name, description);
    build(event);
    this.events.push(event);
    return this;
  }

  public static Component(humanName: string, build: ComponentBuilder = () => { }) {
    return createDecorator((options, key) => {
      const api = options.$api || new API(humanName);
      api.humanName = humanName;
      build(api);
      options.$api = api;
    });
  }

  public static Prop(description: string, build: PropBuilder = () => { }) {
    return createDecorator((options, key) => {
      const prop = new APIProp({ key, description });
      const { props } = options;
      if (props !== undefined) {
        if (!Array.isArray(props)) {
          if (key in props) {
            const validator = props[key];
            if (typeof validator === 'object') {
              if ('required' in validator) {
                prop.required = validator.required || false;
              }
              if ('default' in validator) {
                prop.defaultValue = validator.default;
              }
            }
          }
        }
        build(prop);
      }
      const api = options.$api || new API();
      api.addProp(prop);
      options.$api = api;
    });
  }
}
