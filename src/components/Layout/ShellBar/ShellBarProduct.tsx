import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarProduct') })
@Api.Component('Shell Bar Product')
@Api.defaultSlot('Product')
export class ShellBarProduct extends TsxComponent<{}> {
  public render() {
    return (
      <div class='fd-shellbar__product'>
          {this.$slots.default}
      </div>
    );
  }
}
