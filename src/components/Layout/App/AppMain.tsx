import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('App') })
@Api.defaultSlot('Main App Content')
export class AppMain extends TsxComponent<{}> {
  public render() {
    return <main class='fd-app__main'>{this.$slots.default}</main>;
  }
}
