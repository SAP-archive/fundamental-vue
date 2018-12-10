import { PluginObject } from 'vue';
import { hasBackgroundColor } from './has-background-color';
import { icon } from './icon';
import { padding, margin, fontWeight, fontFamily } from './design-system-utilities';

export * from './has-background-color';
export * from './icon';
export * from './design-system-utilities';

export default {
  install(Vue) {
    Vue.directive('bg', hasBackgroundColor);
    Vue.directive('hasBackgroundColor', hasBackgroundColor);
    Vue.directive('icon', icon);
    Vue.directive('padding', padding);
    Vue.directive('margin', margin);
    Vue.directive('font-weight', fontWeight);
    Vue.directive('font-family', fontFamily);
  },
} as PluginObject<{}>;
