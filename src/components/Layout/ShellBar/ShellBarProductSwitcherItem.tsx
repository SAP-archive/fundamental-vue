import {
  ShellBarProductSwitcherItemTitle,
  ShellBarProductSwitcherItemImg,
} from '@/components';
import { warn, Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  src: string;
  to?: string | Location;
  href: string;
  title: string;
}

@Component('ShellBarProductSwitcherItem')
@DefaultSlot('Product Switcher Item Title')
export class ShellBarProductSwitcherItem extends Base<Props> {
  @Prop('image source', {type: String, default: ''})
  public src!: string;

  @Prop({type: String, default: ''})
  public title!: string;

  @Prop('router link destination', {
    type: [String, Object],
    required: false,
    default: null,
  })
  public to!: string | object | null;

  @Prop('external link destination', {
    type: [String, Object],
    required: false,
    default: '#',
  })
  public href!: string;

  private onClick(event: MouseEvent) {
    event.preventDefault();
    const { to, $router } = this;
    if (to != null) {
      if($router != null) {
        $router.push(to);
      } else {
        warn(`Tried to navigate to ${to} but $router not found.`);
      }
    }
    this.$emit('click', this);
  }
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
        this.to ? <a href={this.href}>{template}</a> : <a href='#' on-click={this.onClick}>{template}</a>
      )}
      </li>
    );
  }
}
