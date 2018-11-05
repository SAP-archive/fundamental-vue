import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator';
import { ComponentAPI } from './ComponentAPI';
import { DocsExample } from './DocsExample';
import DynamicComponent from './DynamicComponent.vue';
import { VueConstructor } from 'vue';
import { uiComponents, uiComponentForSlug, UIComponentExample } from '@/docs/config';

@Component({
  name: 'component-collection',
  components: {
    DocsExample,
    DynamicComponent,
    ComponentAPI,
  },
})
export class ComponentCollection extends Vue {
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
      });
    });
  }

  public beforeRouteUpdate(to, _, next) {
    // Reset the UI. Future work: Implement loading state.
    this.resetUI();
    const { slug } = to.params;
    const componentCollection = uiComponents.find(collection => collection.slug === slug);
    if (componentCollection == null) {
      this.resetUI();
      next();
      return;
    }

    componentCollection.preparedExamples().then(examples => {
      this.examples = examples;
      this.relatedComponents = componentCollection.relatedComponents;
      next();
    });
  }

  @Prop({ type: String, required: false, default: null })
  public title!: string | null;

  private relatedComponents: VueConstructor[] = [];
  private examples: UIComponentExample[] = [];
  private resetUI() {
    this.examples = [];
    this.relatedComponents = [];
  }

  public render() {
    const relatedComponents = this.relatedComponents;
    const examples = this.examples;
    return (
      <div>
        {examples.map(example => (<docs-example description={example.description} component={example.component} sourcecode={example.code} title={example.title} />))}
        {relatedComponents.map(comp => (<component-api style={'margin-bottom:20px;'} component={comp} />))}
      </div>
    );
  }
}
