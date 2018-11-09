import { APICollection } from './api';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $apiCollection?: APICollection;
  }
}
