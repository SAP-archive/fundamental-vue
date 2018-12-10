// We are re-implementing <component> that comes with Vue.
// This is done because <component> is not usable from tsx/jsx.
// We could simply wrap <component> with a .vue file to save us a
// couple lines of code. However we still would have no type checking.

import {
  Component,
  Prop,
 } from 'vue-property-decorator';
import Vue, {
  VueConstructor,
  CreateElement,
  ComponentOptions,
} from 'vue';
import TsxComponent from '@/vue-tsx';

// Convenience type that represents a component
type AnyComponent =
| string                  // already registered component name
| ComponentOptions<any>
| VueConstructor;

interface Props {
  // Sadly, we cannot simply call this prop 'is' because
  // 'is' is a reserved word (by Vue).
  component: AnyComponent;
}

@Component({ name: 'DynamicComponent' })
export class DynamicComponent extends TsxComponent<Props> {
  @Prop({ required: true, type: [String, Object, Function] })
  public component!: AnyComponent;

  private get renderableComponent(): ComponentOptions<any> | VueConstructor {
    const component = this.component;
    if(typeof component === 'string') {
      return Vue.component(component);
    }
    return component;
  }

  public render(h: CreateElement) {
    return h(this.renderableComponent);
  }
}
