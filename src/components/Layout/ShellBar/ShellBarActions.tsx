import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarActions') })
@Api.Component('Shell Bar Actions')
@Api.defaultSlot('Shell Bar Action Instances')
export class ShellBarActions extends TsxComponent<{}> {
  public render() {
    return <div class='fd-shellbar__actions'>{this.$slots.default}</div>;
  }
}
