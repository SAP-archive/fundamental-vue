import { Component, Vue } from 'vue-property-decorator';

import ExampleComponent from './examples/Example.vue';
import ExampleComponentCode from '!raw-loader!./examples/Example.vue';

@Component
export class ExampleDocs extends Vue {
  public render() {
    return (
      <div>
        <example component={ExampleComponent} code={ExampleComponentCode} title={'Default Alert'} />
      </div>
    );
  }
}
