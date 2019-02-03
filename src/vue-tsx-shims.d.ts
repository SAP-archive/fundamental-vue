import { ComponentProps } from './vue-tsx-types';

declare global {
  namespace JSX {
    interface ElementOptionalAttributesProperty {}
    interface ElementAttributesProperty {
      ''?: any;

      // $tsxProps: {};
      // {};
     }
  }
}
