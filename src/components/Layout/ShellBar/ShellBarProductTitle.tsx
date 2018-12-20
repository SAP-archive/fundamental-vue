import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarProductTitle') })
@Api.Component('Shell Bar Product Title')
@Api.defaultSlot('Product Title')
export class ShellBarProductTitle extends TsxComponent<{}> {
  public render() {
    return (
      <span class='fd-shellbar__title'>
        {this.$slots.default}
      </span>
    );
  }
}
