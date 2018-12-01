import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Api } from '@/api';
import TsxComponent from '@/vue-tsx';

interface Props {
  to?: object | null;
}

@Component({ name: componentName('BreadcrumbItem') })
@Api.Component('Breadcrumb Item')
@Api.Event('click', 'Sent when item was clicked', ['item', 'BreadcrumbItem'])
@Api.defaultSlot('Breadcrumb Item Title')
export class BreadcrumbItem extends TsxComponent<Props> {
  @Api.Prop('target route (passed to $router.to(…))', prop => prop.type(Object))
  @Prop({ type: Object, required: false, default: null })
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
