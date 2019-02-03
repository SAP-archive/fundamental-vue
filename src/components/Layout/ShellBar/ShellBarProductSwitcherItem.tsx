import {
  ShellBarProductSwitcherItemTitle,
  ShellBarProductSwitcherItemImg,
} from '@/components';
import { warn, Component, Prop, Base } from '@/core';

interface Props {
  src: string;
  to?: string | Location;
  href: string;
  title: string;
}

@Component('ShellBarProductSwitcherItem')

export class ShellBarProductSwitcherItem extends Base<Props> {
  @Prop('image source', {type: String, default: ''})
  src!: string;

  @Prop({type: String, default: ''})
  title!: string;

  @Prop('router link destination', {
    type: [String, Object],
    required: false,
    default: null,
  })
  to!: string | object | null;

  @Prop('external link destination', {
    type: [String, Object],
    required: false,
    default: '#',
  })
  href!: string;

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
  render() {
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
