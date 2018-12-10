import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBar') })
@Api.Component('Shell Bar')
@Api.defaultSlot('Main Shell Bar Content')
export class ShellBar extends TsxComponent<{}> {
  public render() {
    return <div class='fd-shellbar'>{this.$slots.default}</div>;
  }
}
