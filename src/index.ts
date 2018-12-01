
import * as components from '@/components';
import { hasBackgroundColor } from '@/directives';
import { VueConstructor, PluginFunction } from 'vue';
import { componentName } from '@/util';

const api = {
  registerComponent(vue: VueConstructor<any>, component: VueConstructor<any>, name: string) {
    const prefixedName = componentName(name);
    console.log(`Register component ${prefixedName}`);
    vue.component(prefixedName, component);
  },
};

const installFundamentals: PluginFunction<object> = vue /*, options */ => {
  vue.directive('bg', hasBackgroundColor);
  vue.directive('hasBackgroundColor', hasBackgroundColor);
  components.plugin().install(vue, api);
};
export default installFundamentals;
