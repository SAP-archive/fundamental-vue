import Vue from 'vue';
import { Api } from './api';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $api?: Api;
  }
}
