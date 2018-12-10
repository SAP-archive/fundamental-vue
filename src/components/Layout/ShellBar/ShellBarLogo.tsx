import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarLogo') })
@Api.defaultSlot('The actual logo')
export class ShellBarLogo extends TsxComponent<{}> {
  public render() {
    return <a href='#' class='fd-shellbar__logo'>{this.$slots.default}</a>;
  }
}
