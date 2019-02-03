import { warn, Component, Prop, Base } from '@/core';

interface Props {
  src: string;
  srcset?: string;
  to?:
    | string // simple path
    | object // vue-router Location
    ;
}

@Component('ShellBarLogo')
export class ShellBarLogo extends Base<Props> {
  @Prop('image source', {
    type: String,
    required: true,
  })
  src!: string;

  @Prop('image source set', {
    type: String,
    default: null,
  })
  srcset!: string | null;

  @Prop('link destination', {
    type: [String, Object],
    default: '/',
  })
  to!: string | Location;

  render() {
    return (
      <a class='fd-shellbar__logo' href='#' onClick={this.onClick}>
        <img src={this.src} srcset={this.srcset}/>
      </a>
    );
  }

  private onClick(event: MouseEvent) {
    event.preventDefault();
    const { to, $router } = this;
    if (to != null) {
      if($router != null) {
        // @ts-ignore
        $router.push(to);
      } else {
        warn(`Tried to navigate to ${to} but $router not found.`);
      }
    }
    this.$emit('click', this);
  }
}
