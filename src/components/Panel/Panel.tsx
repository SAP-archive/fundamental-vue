import './Panel.css';
import { Slot, Component, DefaultSlot, Prop, Base } from '@/core';

interface Props {
  title?: string | null;
  description?: string | null;
  span?: number | null;
  condensed?: boolean;
  condensedFooter?: boolean;
}

@Component('Panel')
@DefaultSlot('Panel Body')
@Slot('actions', 'Panel Actions')
@Slot('filters', 'Custom Panel Filters')
@Slot('footer', 'Custom Panel Footer')
export class Panel extends Base<Props> {
  @Prop({ type: String, default: null })
  public title!: string | null;

  @Prop({ type: String, default: null })
  public description!: string | null;

  @Prop({ type: Number, default: null })
  public span!: number | null;

  @Prop('whether the panel body is condensed (has no padding)', { type: Boolean, default: false })
  public condensed!: boolean;

  @Prop('whether the panel footer is condensed (has no padding)', { type: Boolean, default: false })
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
