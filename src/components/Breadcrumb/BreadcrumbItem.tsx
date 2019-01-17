import { warn, Component, Event, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  to?: object | null;
}

@Component('BreadcrumbItem')
@Event('click', 'Sent when item was clicked', ['item', 'BreadcrumbItem'])
@DefaultSlot('Breadcrumb Item Title')
export class BreadcrumbItem extends Base<Props> {
  @Prop('target route (passed to $router.to(…))', {
    type: Object,
    default: null,
  })
  public to!: object | null;

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
    const title = this.$slots.default;
    return (
      <li class='fd-breadcrumb__item'>
        <a class='fd-breadcrumb__link' href='#' on-click={this.onClick}>{title}</a>
      </li>
    );
  }
}
