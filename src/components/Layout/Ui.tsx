import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';

@Component({ name: componentName('ui') })
export class Ui extends Vue {
  public render() {
    const sidebar = this.$slots.sidebar;
    const footer = this.$slots.footer;
    const main = this.$slots.default;

    return (
      <div class='fd-ui fd-ui--fundamental'>
        <div class='fd-ui__app' style='marginTop : 0;'>
          <div class='fd-app'>
            {!!sidebar && <div class='fd-app__sidebar'>{sidebar}</div>}
            <main class='fd-app__main' style='height: 100%; background-color: white;'>{main}</main>
          </div>
        </div>
        {!!footer && <div class='fd-ui__footer'>{footer}</div>}
      </div>
    );
  }
}
