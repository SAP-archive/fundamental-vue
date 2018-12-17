import { Component } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('Shell') })
@Api.Component('Shell')
@Api.defaultSlot('Main Content')
export class Shell extends TsxComponent<{}> {
  public render() {
    return <div class='fd-shell fd-shell--fixed fd-shell--fundamentals'>{this.$slots.default}</div>;
  }
}
