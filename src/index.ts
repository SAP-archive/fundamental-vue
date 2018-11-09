
import * as components from '@/components';
// import { PluginAPI } from '@/lib/plugin';
import { hasBackgroundColor } from '@/directives';
import { PluginFunction } from 'vue';

const api = {
  registerComponent(vue, component, name) {
    const prefixedName = `Vf${name}`;
    console.log(`Register component ${prefixedName}`);
    vue.component(prefixedName, component);
  },
};

const installFundamentals: PluginFunction<object> = (vue, options) => {
  vue.directive('bg', hasBackgroundColor);
  vue.directive('hasBackgroundColor', hasBackgroundColor);
  components.plugin().install(vue, api);
};
export default installFundamentals;
