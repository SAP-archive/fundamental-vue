import { Component, Event, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  to?: object | null;
}

@Component('BreadcrumbItem')
@Event('click', 'Sent when item was clicked', ['item', 'BreadcrumbItem'])
@DefaultSlot('Breadcrumb Item Title')
export class BreadcrumbItem extends Base<Props> {
  @Prop('target route (passed to $router.to(…))', { type: Object, default: null })
  public to!: object | null;

  private onClick(event: MouseEvent) {
    event.preventDefault();
    const to = this.to;
    const router = this.$router;
    if (to != null && router != null) {
      router.push(to);
    }
    this.$emit('click', this);
  }

  public render() {
    const title = this.$slots.default;
    return (
      <li class='fd-breadcrumb__item'>
        <a class='fd-breadcrumb__link' href='#' on-click={event => this.onClick(event)}>{title}</a>
      </li>
    );
  }
}
