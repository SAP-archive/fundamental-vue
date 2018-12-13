import { createDecorator } from 'vue-class-component';
import { ApiProp } from './ApiProp';
import { ApiEvent } from './ApiEvent';
import { ApiSlot } from './ApiSlot';

type PropBuilder = (builder: ApiProp) => void;
type ComponentBuilder = (builder: Api) => void;
type EventParameterType = string | BooleanConstructor | NumberConstructor | StringConstructor;
type EventType = [/* name */ string, EventParameterType];

export class Api {
  public readonly props: ApiProp[] = [];
  public readonly events: ApiEvent[] = [];
  public readonly slots: ApiSlot[] = [];
  constructor(public humanName?: string) { }

  public addProp(prop: ApiProp) {
    this.props.push(prop);
  }

  public addEvent(event: ApiEvent): this {
    this.events.push(event);
    return this;
  }

  public addSlot(slot: ApiSlot): this {
    this.slots.push(slot);
    return this;
  }

  public static slot(name: string, description: string = '') {
    return createDecorator(options => {
      const slot = new ApiSlot(name, description);
      const api = options.$api || new Api();
      options.$api = api.addSlot(slot);
    });
  }

  public static defaultSlot(description: string) {
    return this.slot('', description);
  }

  public static Event(name: string, description: string, parameter?: EventType) {
    return createDecorator(options => {
      const api = options.$api || new Api();
      api.addEvent(new ApiEvent(name, description, parameter));
      options.$api = api;
    });
  }

  public static Component(humanName: string, build: ComponentBuilder = () => { }) {
    return createDecorator(options => {
      const api = options.$api || new Api(humanName);
      api.humanName = humanName;
      build(api);
      options.$api = api;
    });
  }

  public static prop(description: string, { defaultValue }: { defaultValue?: string } = {}) {
    return createDecorator((options, key) => {
      const prop = new ApiProp({ key, description });
      const { props } = options;
      if (props !== undefined) {
        if (!Array.isArray(props)) {
          if (key in props) {
            const validator = props[key];
            if (typeof validator === 'object') {
              prop.updateWithPropValidator(validator);
            }
          }
        }
      }
      const api = options.$api || new Api();
      if(defaultValue !== undefined) {
        prop.defaultValue = defaultValue;
      }
      api.addProp(prop);
      options.$api = api;
    });
  }

  public static Prop(description: string, build: PropBuilder = () => { }) {
    return createDecorator((options, key) => {
      const prop = new ApiProp({ key, description });
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
      const api = options.$api || new Api();
      api.addProp(prop);
      options.$api = api;
    });
  }
}
