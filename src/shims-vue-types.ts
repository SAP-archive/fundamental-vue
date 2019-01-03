import { FrameworkDocumentation } from './api';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $apiCollection?: FrameworkDocumentation;
  }
}
