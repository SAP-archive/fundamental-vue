import Vue from 'vue';
import { API } from './api';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $api?: API;
  }
}
