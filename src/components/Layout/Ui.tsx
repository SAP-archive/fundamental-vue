import {
  Component,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';

@Component({ name: componentName('Ui') })
@Api.defaultSlot('Main Content')
@Api.slot('sidebar', 'Sidebar Content')
@Api.slot('header', 'Header Content')
@Api.slot('footer', 'Footer Content')
export class Ui extends Vue {
  public render() {
    const sidebar = this.$slots.sidebar;
    const header = this.$slots.header;
    const footer = this.$slots.footer;
    const main = this.$slots.default;

    return (
      <div class='fd-ui fd-ui--fundamental'>
        {!!header && <div class='fd-ui__header'>{header}</div>}
        <div class='fd-ui__app'>
          <div class='fd-app'>
            {!!sidebar && <div class='fd-app__sidebar'>{sidebar}</div>}
            <main class='fd-app__main' style='background-color: white;'>{main}</main>
          </div>
        </div>
        {!!footer && <div class='fd-ui__footer'>{footer}</div>}
      </div>
    );
  }
}
