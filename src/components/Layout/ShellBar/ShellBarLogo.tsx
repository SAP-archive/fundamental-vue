import { Location } from 'vue-router';
import { Component, Prop, Base } from '@/core';

interface Props {
  src: string;
  srcset?: string;
  to?: string | Location;
}

@Component('ShellBarLogo')
export class ShellBarLogo extends Base<Props> {
  @Prop('image source', {type: String, required: true })
  public src!: string;

  @Prop('image source set', {
    type: String,
    default: null,
  })
  public srcset!: string | null;

  @Prop('link destination', {
    type: [String, Object],
    default: '/',
  })
  public to!: string | Location;

  public render() {
    return (
      <router-link tag='a' to={this.to} class='fd-shellbar__logo'>
        <img src={this.src} srcset={this.srcset}/>
      </router-link>
    );
  }
}
