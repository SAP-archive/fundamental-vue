import {
  Component,
  Vue,
  Prop,
  Watch,
} from 'vue-property-decorator';
import { all } from '@/components';
import { ComponentReference } from './ComponentReference';
import { ComponentExample } from './ComponentExample';
import { FrameworkDocumentation, ComponentDocumentation } from '@/api';
import { VueConstructor } from 'vue/types/vue';
import { Route } from 'vue-router';
import { exampleCollections, Example } from '@/docs/pages';

const frameworkDocumentation = new FrameworkDocumentation();
for (const component of Object.values(all)) {
    if ((typeof component !== 'object' && typeof component !== 'function') || !Reflect.has(component, 'options')) {
        continue;
    }
    const options = Reflect.get(component, 'options');
    if (typeof options === 'object') {
        if ('$componentDocumentation' in options) {
            const api = Reflect.get(options, '$componentDocumentation');
            if (api instanceof ComponentDocumentation) {
              frameworkDocumentation.add(api);
            }
        }
    }
}

const componentName = (component: any) => {
  if('options' in component) {
    const { options } = component;
    let name: string | undefined;
    if('componentName' in options) {
      name = options.componentName;
    }
    if(name == null && 'name' in options) {
      name = options.name || component.name;
    }
    return name;
  }
};

type VMFn<T> = (vm: T) => void;
type NextFn<T> = (fn?: VMFn<T>) => void;
type DocumentedComponent = { api: ComponentDocumentation; component: VueConstructor<any>; };
@Component({
  name: 'ExampleCollection',
  components: {
    ComponentExample,
    ComponentReference,
  },
})
export class ExampleCollection extends Vue {
  private get documentedComponents(): DocumentedComponent[] {
    const documentedRelatedComponents = this.relatedComponents.filter(component => {
      const name = componentName(component);
      if(name == null) { return false; }
      return frameworkDocumentation.has(name);
    });
    return documentedRelatedComponents.map(component => {
      const name = componentName(component) || '';
      return {
        component,
        api: frameworkDocumentation.get(name),
      };
    });
  }

  @Watch('$route', { immediate: true })
  public handleNewRoute(newRoute: Route) {
    const { slug } = newRoute.params;
    // Reset the UI. Future work: Implement loading state.
    this.resetUI();
    const exampleCollection = exampleCollections.exampleCollection({ slug });
    if (exampleCollection === undefined) {
      this.resetUI();
      this.$forceUpdate();
      return;
    }

    this.examples = exampleCollection.examples();
    this.relatedComponents = exampleCollection.relatedComponents;
    this.$forceUpdate();
  }

  public beforeRouteEnter(to: Route, _: Route, next: NextFn<ExampleCollection>): void {
    const { slug } = to.params;
    const exampleCollection = exampleCollections.exampleCollection({ slug });
    if (exampleCollection == null) {
      next(vm => vm.resetUI());
      return;
    }
    const examples = exampleCollection.examples();
    next(vm => {
      vm.examples = examples;
      vm.relatedComponents = exampleCollection.relatedComponents;
      vm.$forceUpdate();
    });
  }

  public beforeRouteUpdate(to: Route, _: Route, next: NextFn<ExampleCollection>) {
    const { slug } = to.params;

    // Reset the UI. Future work: Implement loading state.
    this.resetUI();
    const exampleCollection = exampleCollections.exampleCollection({ slug });
    if (exampleCollection == null) {
      this.resetUI();
      this.$forceUpdate();
      next();
      return;
    }
    const examples = exampleCollection.examples();
    this.examples = examples;
    this.relatedComponents = exampleCollection.relatedComponents;
    this.$forceUpdate();
    next();
  }

  @Prop({ type: String, required: false, default: null })
  public title!: string | null;

  @Prop({ type: Boolean, default: false })
  public showApiOnly!: boolean | null;

  private relatedComponents: Array<VueConstructor<any>> = [];
  private examples: Example[] = [];

  private resetUI() {
    this.examples = [];
    this.relatedComponents = [];
  }

  public render() {
    const documentedComponents = this.documentedComponents;
    const examples = this.examples;
    const renderExamples = () => {
      return examples.map(example => (
        <ComponentExample
          exampleId={example.id}
          key={`example-${example.code}-${example.id}`}
          tip={example.tip}
          docs={example.docs}
          component={example.component}
          sourcecode={example.code}
          title={example.title}
          condensed={example.condensed}
          fullscreenOnly={example.fullscreenOnly}
        />
      ));
    };

    const renderRelatedComponentsReference = () => {
      return documentedComponents.map(({component, api}) => <ComponentReference key={`api-${component.name}`} api={api} component={component} />);
    };

    return (
      <div>
        {!this.showApiOnly && renderExamples()}
        <div v-bg='neutral-1' style='padding-top: 15px;'>
        {renderRelatedComponentsReference()}
        </div>
      </div>
    );
  }
}
