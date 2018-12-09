import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarProduct') })
@Api.Component('Shell Bar Product')
@Api.defaultSlot('Product Title')
export class ShellBarProduct extends TsxComponent<{}> {
  public render() {
    const title = this.$slots.default;
    return (
      <div class='fd-shellbar__product'>
        <span class='fd-shellbar__title'>{title}</span>
      </div>
    );
  }
}
