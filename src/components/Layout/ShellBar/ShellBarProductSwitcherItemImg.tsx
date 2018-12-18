import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  src: string;
}

@Component({ name: componentName('ShellBarProductSwitcherItemImg') })
@Api.Component('Shell Bar Product Switcher Item Image')
export class ShellBarProductSwitcherItemImg extends TsxComponent<Props> {
  @Api.Prop('image source', prop => prop.type(String))
  @Prop({type: String, required: false, default: ''})
  public src!: string;

  public render() {
    return (
      <span class='fd-product-switcher__product-icon'>
        <img src={this.src} alt=''/>
      </span>
    );
  }
}
