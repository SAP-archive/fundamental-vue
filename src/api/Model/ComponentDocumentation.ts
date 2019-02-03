import { PropDocumentation } from './PropDocumentation';
import { EventDocumentation } from './EventDocumentation';
import { SlotDocumentation } from './SlotDocumentation';

export class ComponentDocumentation {
  constructor(public componentName: string) {}

  readonly propsByName: { [name: string]: PropDocumentation; } = {};
  readonly events: EventDocumentation[] = [];
  readonly slots: SlotDocumentation[] = [];
  readonly mixins: string[] = [];
  get humanName(): string {
    return this.componentName;
  }
  get props(): PropDocumentation[] {
    return Object.values(this.propsByName);
  }

  // Working with the Api
  addProp(prop: PropDocumentation) {
    this.props.push(prop);
    this.propsByName[prop.key] = prop;
  }

  addEvent(event: EventDocumentation): this {
    this.events.push(event);
    return this;
  }

  addSlot(slot: SlotDocumentation): this {
    this.slots.push(slot);
    return this;
  }

  addMixin(name: string): this {
    this.mixins.push(name);
    return this;
  }

  getProp(key: string): PropDocumentation {
    const prop = this.propsByName[key] || new PropDocumentation(key);
    this.propsByName[key] = prop;
    return prop;
  }

  hasProp(key: string): boolean {
    return this.propsByName[key] != null;
  }

  toJSON(): object {
    const events: any = {};
    this.events.forEach(event => (events[event.name] = event));
    const slots: any = {};
    this.slots.forEach(slot => (slots[slots.name || ''] = slot));

    return {
      slots,
      events,
      mixins: this.mixins,
      props: this.propsByName,
      componentName: this.componentName,
    };
  }
}
