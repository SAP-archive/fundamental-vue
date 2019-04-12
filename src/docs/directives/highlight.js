import highlightjs from "highlight.js";
import Vue from "vue";

export const highlight = Vue.directive("highlight", el => {
  highlightjs.highlightBlock(el);
});
