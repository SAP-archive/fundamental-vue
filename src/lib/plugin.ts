import { VueConstructor } from 'vue';

export type PluginAPI = {
  registerComponent(vue: VueConstructor, component: any, name: string): void;
};

export type PluginObject = {
  install: (vue: VueConstructor, api: PluginAPI) => void;
};

export type Plugin = () => PluginObject;
