import highlightjs from 'highlight.js';
import { directiveName } from '@/util';
import Vue from 'vue';

export const highlight = Vue.directive(directiveName('highlight'), (el, binding) => {
  highlightjs.highlightBlock(el);
});
