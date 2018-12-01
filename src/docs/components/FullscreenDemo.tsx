import { Component } from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';
import { exampleCollections } from '@/docs/pages';
import { DynamicComponent } from '@/docs/components';

@Component({ name: 'FullscreenDemo' })
export class FullscreenDemo extends TsxComponent<{}> {
  public render() {
    const exampleId = this.$route.params.id;
    const example = exampleCollections.getExample(exampleId);
    return <DynamicComponent component={example.component} />;
  }
}
