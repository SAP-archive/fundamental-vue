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
import { Route } from 'vue-router';
import { exampleCollections, Example } from '@/docs/pages';

@Component({
  name: 'ExampleCollection',
  components: {
    ComponentExample,
    DynamicComponent,
    ComponentReference,
  },
})
export class ExampleCollection extends Vue {
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

    exampleCollection.examples().then(examples => {
      this.examples = examples;
      this.relatedComponents = exampleCollection.relatedComponents;
      this.$forceUpdate();
    });
  }

  public beforeRouteEnter(to, from, next) {
    const { slug } = to.params;
    const exampleCollection = exampleCollections.exampleCollection({ slug });
    if (exampleCollection == null) {
      next((vm: ExampleCollection) => vm.resetUI());
      return;
    }

    exampleCollection.examples().then(examples => {
      next((vm: ExampleCollection) => {
        vm.examples = examples;
        vm.relatedComponents = exampleCollection.relatedComponents;
        vm.$forceUpdate();
      });
    });
  }

  public beforeRouteUpdate(to, _, next) {
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

    exampleCollection.examples().then(examples => {
      this.examples = examples;
      this.relatedComponents = exampleCollection.relatedComponents;
      this.$forceUpdate();
      next();
    });
  }

  @Prop({ type: String, required: false, default: null })
  public title!: string | null;

  @Prop({ type: Boolean, default: false })
  public showApiOnly!: boolean | null;

  private relatedComponents: VueConstructor[] = [];
  private examples: Example[] = [];

  private resetUI() {
    this.examples = [];
    this.relatedComponents = [];
  }

  public render() {
    const relatedComponents = this.relatedComponents;
    const examples = this.examples;
    const renderExamples = () => {
      return examples.map(example => (<ComponentExample key={`example-${example.code}-${example.id}`} tip={example.tip} docs={example.docs} component={example.component} sourcecode={example.code} title={example.title} />));
    };
    const renderRelatedComponentsReference = () => {
      return relatedComponents.map(comp => <ComponentReference key={`api-${comp.name}`} component={comp} />);
    };

    return (
      <div>
        {!this.showApiOnly && renderExamples()}
        <div v-bg={'neutral-1'} style='padding-top: 15px;'>
        {renderRelatedComponentsReference()}
        </div>
      </div>
    );
  }
}
