import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

@Component({ name: componentName('ShellBarAction') })
@Api.Component('Shell Bar Action')
@Api.defaultSlot('The actual action. The only supported element is FdShellBarUserMenu.')
export class ShellBarAction extends TsxComponent<{}> {
  @Api.Prop('whether the action is always shown', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: true })
  public showAlways!: boolean;

  @Api.Prop('whether the action is collapsible', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false })
  public collapsible!: boolean;

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }

  private get classes() {
    return {
      'fd-shellbar__action': true,
      'fd-shellbar__action--show-always': this.showAlways,
      'fd-shellbar__action--collapsible': this.collapsible,
    };
  }
}
