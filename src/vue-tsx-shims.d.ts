import { ComponentProps } from './vue-tsx-types';

declare global {
  namespace JSX {
    interface ElementAttributesProperty { $tsxProps: {}; }
  }
}
