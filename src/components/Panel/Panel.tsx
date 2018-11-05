import { Component, Prop, Vue } from 'vue-property-decorator';
import './Panel.css';
import { componentName } from '@/util';
import { API } from '@/api';

@Component({ name: componentName('panel') })
@API.Component('Panel')
export class Panel extends Vue {
  @Prop({ type: String, default: null, required: false })
  @API.Prop('title', prop => prop.type(String))
  public title!: string | null;

  @Prop({ type: String, default: null, required: false })
  @API.Prop('description', prop => prop.type(String))
  public description!: string | null;

  @Prop({ type: Number, default: null, required: false })
  @API.Prop('span', prop => prop.type(Number))
  public span!: number | null;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('whether the panel body is condensed (has no padding)', prop => prop.type(Boolean))
  public condensed!: boolean;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('whether the panel footer is condensed (has no padding)', prop => prop.type(Boolean))
  public condensedFooter!: boolean;

  public render() {
    const body = this.$slots.default;
    const title = this.title;
    const description = this.description;
    const actions = this.$slots.actions;
    const hasActions = !!actions;
    const needsHeader = title != null || description != null || actions != null;
    const filters = this.$slots.filters;
    const footer = this.$slots.footer;
    const hasFooter = !!footer;
    const hasFilters = !!filters;

    function renderHeader() {
      const needsHead = title != null || description != null;
      return (
        <div class='fd-panel__header'>
          {needsHead &&
            <div class='fd-panel__head'>
              {title && <h1 class='fd-panel__title'>{title}</h1>}
              {description && <p class='fd-panel__description'>{description}</p>}
            </div>
          }
          {hasActions && <div class='fd-panel__actions'>{actions}</div>}
        </div>
      );
    }

    const bodyClasses = () => {
      return {
        'fd-panel__body': true,
        'vf-panel__condensed': this.condensed,
      };
    };

    const footerClasses = () => {
      return {
        'fd-panel__footer': true,
        'vf-panel__condensed': this.condensedFooter,
      };
    };

    return (
      <div class={this.classObject}>
        {needsHeader && renderHeader()}
        {hasFilters && <div class='fd-panel__filters'>{filters}</div>}
        <div class={bodyClasses()}>{body}</div>
        {hasFooter && <div class={footerClasses()}>{footer}</div>}
      </div>
    );
  }

  get classObject() {
    const spanObject = () => {
      const span = this.span;
      if (typeof span === 'number') {
        return { [`fd-has-grid-column-span-${span}`]: true };
      }
      return {};
    };
    return {
      ...spanObject(),
      'fd-panel': true,
    };
  }
}
