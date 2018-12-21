import { PropDocumentation } from './PropDocumentation';
import { EventDocumentation } from './EventDocumentation';
import { SlotDocumentation } from './SlotDocumentation';

export class ComponentDocumentation {
  // Init
  constructor(public componentName: string) {
  }

  // Props
  public readonly propsByName: { [name: string]: PropDocumentation; } = {};
  public readonly events: EventDocumentation[] = [];
  public readonly slots: SlotDocumentation[] = [];
  public readonly mixins: string[] = [];
  public get humanName(): string {
    return this.componentName;
  }
  public get props(): PropDocumentation[] {
    return Object.values(this.propsByName);
  }

  // Working with the Api
  public addProp(prop: PropDocumentation) {
    this.props.push(prop);
    this.propsByName[prop.key] = prop;
  }

  public addEvent(event: EventDocumentation): this {
    this.events.push(event);
    return this;
  }

  public addSlot(slot: SlotDocumentation): this {
    this.slots.push(slot);
    return this;
  }

  public addMixin(name: string): this {
    this.mixins.push(name);
    return this;
  }

  public getProp(key: string): PropDocumentation {
    const prop = this.propsByName[key] || new PropDocumentation({ key, description: '' });
    this.propsByName[key] = prop;
    return prop;
  }
}
