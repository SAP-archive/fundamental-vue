import * as components from '@/components';
import Directives from '@/directives';
import { PluginFunction } from 'vue';
import { PluginAPIOptions, PluginAPI } from '@/lib/plugin';
import VueRouter from 'vue-router';

type Options = {
  log: {
    registerComponent: boolean;
    welcome: boolean;
  };
} & object;

const installFundamentals: PluginFunction<Options> = (vue, options?: PluginAPIOptions) => {
  vue.use(VueRouter);
  vue.use(Directives);
  const api = new PluginAPI(options);
  components.plugin().install(vue, api);
};

export default installFundamentals;
