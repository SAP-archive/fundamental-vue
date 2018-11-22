import { ApiCollection } from './api';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $apiCollection?: ApiCollection;
  }
}
