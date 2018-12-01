import {
  Vue,
  Component,
 } from 'vue-property-decorator';
import { DynamicComponent } from '@/docs/components/DynamicComponent';

const DEFAULT_LAYOUT = 'Default';

@Component({ name: 'App' })
export class App extends Vue {
  private get layout() {
    return (this.$route.meta.layout || DEFAULT_LAYOUT) + 'Layout';
  }
  public render() {
    return <DynamicComponent component={this.layout} />;
  }
}
