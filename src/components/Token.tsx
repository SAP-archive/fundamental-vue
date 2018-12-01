import { Component } from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('Token') })
@Api.Component('Token')
@Api.Event('click', 'triggers when clicked')
@Api.defaultSlot('Token Text')
export class Token extends TsxComponent<{}> {
  public render() {
    return (
      <span
        class='fd-token'
        role='button'
        on-click={() => this.$emit('click', this)}
      >
        {this.$slots.default}
      </span>
    );
  }
}
