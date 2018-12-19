import { ComponentDocumentation } from './ComponentDocumentation';

export class FrameworkDocumentation {
  private apiByName: {[name: string]: ComponentDocumentation} = {};
  constructor() { }

  public add(api: ComponentDocumentation) {
    this.apiByName[api.componentName] = api;
  }

  public get(name: string): ComponentDocumentation {
    const api = this.apiByName[name] || new ComponentDocumentation(name);
    this.add(api);
    return api;
  }

  public has(name: string): boolean {
    return this.apiByName[name] != null;
  }

  public get apis(): ComponentDocumentation[] {
    return Object.values(this.apiByName);
  }

  public mixinsOf({ mixins }: ComponentDocumentation): ComponentDocumentation[] {
    return mixins.map(mixin => this.apiByName[mixin]).filter(api => api != null);
  }
}
