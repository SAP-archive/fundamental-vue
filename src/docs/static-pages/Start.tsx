import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { Section } from '@/components';

@Component({ name: 'start-page' })
export class StartPage extends Vue {
  public render() {
    return (
      <Section>
        <h1 class='fd-has-font-family-header fd-has-type-4 fd-has-font-weight-bold'>Start</h1>
        <p class='fd-has-type-3'>SAP Vue Fundamentals is a non-official UI framework based on <a href='https://sap.github.io/fundamental/'>SAP Fiori Fundamentals</a>.</p>
      </Section>
    );
  }
}
