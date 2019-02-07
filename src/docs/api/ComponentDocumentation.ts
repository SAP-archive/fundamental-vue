import { EventDocumentation } from './EventDocumentation';
import { PropDocumentation } from './PropDocumentation';
import { SlotDocumentation } from './SlotDocumentation';

export type ComponentDocumentation = {
  componentName: string;
  mixins?: string[];
  events?: { [eventName: string]: EventDocumentation };
  props?: { [propName: string]: PropDocumentation };
  slots?: { [slotName: string]: SlotDocumentation };
};
