import Vue from 'vue';
import { ComponentDocumentation } from './api';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $componentDocumentation?: ComponentDocumentation;
    componentName?: string;
  }
}
