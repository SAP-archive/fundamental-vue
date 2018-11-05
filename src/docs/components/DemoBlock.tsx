import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { Section, Panel } from '@/components';

@Component({ name: 'DemoBlock' })
export class DemoBlock extends Vue {
  @Prop(String) public title!: string;
  public render() {
    return (
      <Section title={this.title}>
        <Panel>{this.$slots.default}</Panel>
      </Section>
    );
  }
}
