import { ComponentDocumentation } from './ComponentDocumentation';

export class FrameworkDocumentation {
  private apiByName: {[name: string]: ComponentDocumentation} = {};

  add(api: ComponentDocumentation) {
    this.apiByName[api.componentName] = api;
  }

  get(name: string): ComponentDocumentation {
    const api = this.apiByName[name] || new ComponentDocumentation(name);
    this.add(api);
    return api;
  }

  has(name: string): boolean {
    return this.apiByName[name] != null;
  }

  get apis(): ComponentDocumentation[] {
    return Object.values(this.apiByName);
  }

  mixinsOf({ mixins }: ComponentDocumentation): ComponentDocumentation[] {
    return mixins.map(mixin => this.apiByName[mixin]).filter(api => api != null);
  }

  toJSON(): object {
    return {
      components: this.apiByName,
    };
  }
}
