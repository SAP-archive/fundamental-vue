import { Component, Prop } from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';
import { Location } from 'vue-router';
import { ShellBarProductSwitcherItemTitle, ShellBarProductSwitcherItemImg } from '@/components';

interface Props {
  src: string;
  to?: string | Location;
  href: string;
  title: string;
}

@Component({ name: componentName('ShellBarProductSwitcherItem') })
@Api.Component('Shell Bar Product Switcher Item')
@Api.defaultSlot('Product Switcher Item Title')
export class ShellBarProductSwitcherItem extends TsxComponent<Props> {
  @Api.Prop('image source', prop => prop.type(String))
  @Prop({type: String, required: false, default: ''})
  public src!: string;

  @Api.Prop('title', prop => prop.type(String))
  @Prop({type: String, required: false, default: ''})
  public title!: string;

  @Api.Prop('router link destination', prop => prop.type(String, Object))
  @Prop({type: [String, Object], required: false, default: ''})
  public to!: string | Location;

  @Api.Prop('external link destination', prop => prop.type(String, Object))
  @Prop({type: [String, Object], required: false, default: ''})
  public href!: string;

  public render() {
    const content = this.$slots.default;
    const title = (
      <ShellBarProductSwitcherItemTitle>{this.title}</ShellBarProductSwitcherItemTitle>
    );
    const img = (
      <ShellBarProductSwitcherItemImg src={this.src}/>
    );
    const template = (
      [
        img,
        title,
      ]
    );
    return (
      <li>
      {content}
      {!content && (
        (!this.href && !this.to) ? template :
        this.to ? <a href={this.href}>{template}</a> : <router-link to={this.to}>{template}</router-link>
      )}
      </li>
    );
  }
}
