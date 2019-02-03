import { Component, Prop, Base } from '@/core';

interface Props {
  src: string;
}

@Component('ShellBarProductSwitcherItemImg')
export class ShellBarProductSwitcherItemImg extends Base<Props> {
  @Prop('image source', { type: String, default: '' })
  src!: string;

  render() {
    return (
      <span class='fd-product-switcher__product-icon'>
        <img src={this.src} alt=''/>
      </span>
    );
  }
}
