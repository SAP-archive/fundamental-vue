import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { API } from '@/api';

@Component({ name: componentName('breadcrumb-item') })
@API.Component('Breadcrumb Item', comp => {
  comp.addEvent('click', 'Sent when item was clicked', event => {
    event.raw('item', 'BreadcrumbItem');
  });
})
export class BreadcrumbItem extends Vue {
  @Prop({ type: Object, required: false, default: null })
  @API.Prop('target route (passed to $router.to(…))', prop => prop.type(Object))
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
