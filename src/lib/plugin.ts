import { VueConstructor } from 'vue';
import { componentName } from '@/util';
import { env, libName, version } from '@/config';
import { log } from '@/core';

export type PluginAPIOptions = {
  log: {
    registerComponent: boolean;
    welcome: boolean;
  };
} & object;

const isProduction = env === 'production';

export class PluginAPI {
  constructor(public options: PluginAPIOptions = { log: {registerComponent: !isProduction, welcome: !isProduction }}) {

  }
  public registerComponent(vue: VueConstructor, component: any, name: string): void {
    const prefixedName = componentName(name);
    if(this.options.log.registerComponent) {
      log(`Register component ${prefixedName}`);
    }
    vue.component(prefixedName, component);
  }
  public logWelcomeMessage() {
    if(this.options.log.welcome) {
      log(
        `%c Welcome to ${libName} %c Detected v${version} %c`,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#1661be ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent',
      );
    }
  }
}

export type PluginObject = {
  install: (vue: VueConstructor, api: PluginAPI) => void;
};

export type Plugin = () => PluginObject;
