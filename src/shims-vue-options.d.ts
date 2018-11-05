import Vue from 'vue';
import { API, APIProp } from './api';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $api?: API;
  }
}
