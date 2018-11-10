import {
  Component,
  Vue,
  Prop,
  Watch,
} from 'vue-property-decorator';
import { ComponentReference } from './ComponentReference';
import { ComponentExample } from './ComponentExample';
import DynamicComponent from './DynamicComponent.vue';
import { VueConstructor } from 'vue';
import { uiComponents, uiComponentForSlug, UiComponentExample } from '@/docs/config';
import { Route } from 'vue-router';

@Component({
  name: 'ComponentCollection',
  components: {
    ComponentExample,
    DynamicComponent,
    ComponentReference,
  },
})
export class ComponentCollection extends Vue {
  @Watch('$route', { immediate: true })
  public handleNewRoute(newRoute: Route) {
    const { slug } = newRoute.params;

    // Reset the UI. Future work: Implement loading state.
    this.resetUI();
    const componentCollection = uiComponents.find(collection => collection.slug === slug);
    if (componentCollection == null) {
      this.resetUI();
      this.$forceUpdate();
      return;
    }

    componentCollection.preparedExamples().then(examples => {
      this.examples = examples;
      this.relatedComponents = componentCollection.relatedComponents;
      this.$forceUpdate();
    });
  }

  public beforeRouteEnter(to, from, next) {
    const { slug } = to.params;
    const component = uiComponentForSlug(slug);
    if (component == null) {
      next((vm: ComponentCollection) => vm.resetUI());
      return;
    }

    component.preparedExamples().then(examples => {
      next((vm: ComponentCollection) => {
        vm.examples = examples;
        vm.relatedComponents = component.relatedComponents;
        vm.$forceUpdate();
      });
    });
  }

  public beforeRouteUpdate(to, _, next) {
    const { slug } = to.params;

    // Reset the UI. Future work: Implement loading state.
    this.resetUI();
    const componentCollection = uiComponents.find(collection => collection.slug === slug);
    if (componentCollection == null) {
      this.resetUI();
      this.$forceUpdate();
      next();
      return;
    }

    componentCollection.preparedExamples().then(examples => {
      // log(`beforeRouteUpdate: examples: ${examples.length}`);
      this.examples = examples;
      this.relatedComponents = componentCollection.relatedComponents;
      this.$forceUpdate();
      next();
    });
  }

  @Prop({ type: String, required: false, default: null })
  public title!: string | null;

  @Prop({ type: Boolean, default: false })
  public showApiOnly!: boolean | null;

  private relatedComponents: VueConstructor[] = [];
  private examples: UiComponentExample[] = [];

  private resetUI() {
    this.examples = [];
    this.relatedComponents = [];
  }

  public render() {
    const relatedComponents = this.relatedComponents;
    const examples = this.examples;
    const renderExamples = () => {
      return examples.map(example => (<ComponentExample key={`example-${example.code}-${example.id}`} description={example.description} component={example.component} sourcecode={example.code} title={example.title} />));
    };
    const renderRelatedComponentsReference = () => {
      return relatedComponents.map(comp => <ComponentReference key={`api-${comp.name}`} component={comp} />);
    };

    return (
      <div>
        {!this.showApiOnly && renderExamples()}
        <div v-bg={'neutral-1'} style='border-top: 1px solid rgb(220, 220, 220); padding-top: 15px;'>
        {renderRelatedComponentsReference()}
        </div>
      </div>
    );
  }
}
