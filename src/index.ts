import * as components from '@/components';
import Directives from '@/directives';
import { PluginFunction } from 'vue';
import { PluginAPIOptions, PluginAPI } from '@/lib/plugin';

type Options = {
  log: {
    registerComponent: boolean;
    welcome: boolean;
  };
} & object;

const Plugin: PluginFunction<Options> = (vue, options?: PluginAPIOptions) => {
  vue.use(Directives);
  const api = new PluginAPI(options);
  components.plugin().install(vue, api);
};

export default Plugin;
