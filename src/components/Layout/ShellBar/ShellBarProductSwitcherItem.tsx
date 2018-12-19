import { Location } from 'vue-router';
import { ShellBarProductSwitcherItemTitle, ShellBarProductSwitcherItemImg } from '@/components';
import { Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  src: string;
  to?: string | Location;
  href: string;
  title: string;
}

@Component('ShellBarProductSwitcherItem')
@DefaultSlot('Product Switcher Item Title')
export class ShellBarProductSwitcherItem extends Base<Props> {
  @Prop('image source', {type: String, required: false, default: ''})
  public src!: string;

  @Prop({type: String, required: false, default: ''})
  public title!: string;

  @Prop('router link destination', {type: [String, Object], required: false, default: ''})
  public to!: string | Location;

  @Prop('external link destination', {type: [String, Object], required: false, default: ''})
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
