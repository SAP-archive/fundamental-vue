import Vue from 'vue';

export const RowTemplate = Vue.extend({
  functional: true,
  render(_, context) {
    return context.children;
  },
});
