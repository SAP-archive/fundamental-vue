import { Component } from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import TsxComponent from '@/vue-tsx';

// tslint:disable-next-line:no-empty-interface
interface Props {}

@Component({ name: componentName('Token') })
@Api.Component('Token', comp => comp.addEvent('click', 'triggers when clicked'))
@Api.defaultSlot('Token Text')
export class Token extends TsxComponent<Props> {
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
