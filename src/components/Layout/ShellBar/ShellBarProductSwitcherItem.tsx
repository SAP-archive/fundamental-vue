import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';
import { Location } from 'vue-router';

interface Props {
  src: string;
  to?: string | Location;
  href: string;
}

@Component({ name: componentName('ShellBarProductSwitcherItem') })
@Api.Component('Shell Bar Product Switcher Item')
@Api.defaultSlot('Product Switcher Item Title')
export class ShellBarProductSwitcherItem extends TsxComponent<Props> {
  @Api.Prop('image source', prop => prop.type(String))
  @Prop({type: String, required: true})
  public src!: string;

  @Api.Prop('router link destination', prop => prop.type(String, Object))
  @Prop({type: [String, Object], default: '/'})
  public to!: string | Location;

  @Api.Prop('external link destination', prop => prop.type(String, Object))
  @Prop({type: [String, Object], default: '/'})
  public href!: string;

  public render() {
    const title = (
      <span class='fd-product-switcher__product-title'>
        {this.$slots.default}
      </span>
    );
    return (
      <li>
        <span class='fd-product-switcher__product-icon'>
          <img src={this.src} alt=''/>
        </span>
        {this.to ? <a href={this.href}>{title}</a> : <router-link to={this.to}>{title}</router-link> }
      </li>
    );
  }
}
