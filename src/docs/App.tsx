import Vue from 'vue';
import { DynamicComponent } from '@/docs/components/DynamicComponent';
import { Component } from 'vue-property-decorator';

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
