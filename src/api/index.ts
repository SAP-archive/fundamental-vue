export { ComponentDocumentation } from './ComponentDocumentation';
export { EventDocumentation } from './EventDocumentation';
export { FrameworkDocumentation } from './FrameworkDocumentation';
export { SlotDocumentation } from './SlotDocumentation';

// We cannot use the same syntax as above because of an issue with babel + webpack + typescript:
// see: https://github.com/babel/babel-loader/issues/603
// Workaround is to export *.
export * from './PropDocumentation';

import { model, component, event, defaultSlot, slot, prop, mixins } from './Decorators';
export const Doc = {
  event,
  slot,
  defaultSlot,
  component,
  prop,
  mixins,
  model,
};
