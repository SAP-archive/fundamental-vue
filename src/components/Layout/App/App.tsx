import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  headerClass?: string;
}

@Component({ name: componentName('App') })
@Api.defaultSlot('Main Content')
@Api.slot('navigation', 'Navigation Content')
export class App extends TsxComponent<Props> {
  @Prop({type: String, default: null })
  public headerClass!: string | null;

  public render() {
    const header = this.$slots.header;
    const footer = this.$slots.footer;
    const main = this.$slots.default;
    return (
      <div class='fd-shell__app'>
        {header}
          <div class='fd-app'>{main}</div>
        {footer}
      </div>
    );
  }
}
