import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarSubtitle') })
@Api.Component('Shell Bar Subtitle')
@Api.defaultSlot('Subtitle')
export class ShellBarSubtitle extends TsxComponent<{}> {
  public render() {
    return (
      <span class='fd-shellbar__subtitle'>
        {this.$slots.default}
      </span>
    );
  }
}
