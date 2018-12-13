import * as components from '@/components';
import Directives from '@/directives';
import { VueConstructor, PluginFunction } from 'vue';
import { componentName } from '@/util';
import { env } from '@/config';

const api = {
  registerComponent(vue: VueConstructor<any>, component: VueConstructor<any>, name: string) {
    const prefixedName = componentName(name);
    if(env !== 'production') {
      console.log(`Register component ${prefixedName}`);
    }
    vue.component(prefixedName, component);
  },
};

const installFundamentals: PluginFunction<object> = vue /*, options */ => {
  vue.use(Directives);
  components.plugin().install(vue, api);
};
export default installFundamentals;
