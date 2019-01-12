import { Slot, Component, DefaultSlot, Prop, Base } from '@/core';
import { paddingClasses } from '@/directives/design-system-utilities';

const ValidColSpans = [2, 3, 4, 5, 6];

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
  @Prop('Panel Title', {
    type: String,
    default: null,
  })
  public title!: string | null;

  @Prop('Panel Description (displayed below the title)', {
    type: String,
    default: null,
  })
  public description!: string | null;

  @Prop('Panel colspan when used inside a Panel Grid', {
    type: Number,
    default: null,
    acceptableValues: ValidColSpans,
    validator: ValidColSpans.includes,
  })
  public span!: number | null;

  @Prop('whether the panel body is condensed (has no padding; not officially part of Fundamentals)', {
    type: Boolean,
    default: false,
  })
  public condensed!: boolean;

  @Prop('whether the panel footer is condensed (has no padding)', {
    type: Boolean,
    default: false,
  })
  public condensedFooter!: boolean;

  public render() {
    const title = this.title;
    const description = this.description;
    const actions = this.$slots.actions;
    const hasActions = !!actions;
    const needsHeader = title != null || description != null || actions != null;
    const filters = this.$slots.filters;
    const hasFilters = !!filters;

    function renderHeader() {
      const needsHead = title != null || description != null;
      return (
        <div staticClass='fd-panel__header'>
          {needsHead &&
            <div staticClass='fd-panel__head'>
              {title && <h1 staticClass='fd-panel__title'>{title}</h1>}
              {description && <p staticClass='fd-panel__description'>{description}</p>}
            </div>
          }
          {hasActions && <div staticClass='fd-panel__actions'>{actions}</div>}
        </div>
      );
    }
    return (
      <div staticClass='fd-panel' class={this.classes}>
        {needsHeader && renderHeader()}
        {hasFilters && <div staticClass='fd-panel__filters'>{filters}</div>}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }

  private renderFooter() {
    const footer = this.$slots.footer;
    if(footer == null) { return null; }
    const classes = !this.condensedFooter ? [] : paddingClasses('none');
    return <div staticClass='fd-panel__footer' class={classes}>{footer}</div>;
  }

  private renderBody() {
    const body = this.$slots.default;
    if(body == null) { return null; }
    const classes = !this.condensed ? [] : paddingClasses('none');
    return <div staticClass='fd-panel__body' class={classes}>{body}</div>;
  }

  private get classes() {
    const { span } = this;
    return span == null ? [] : [`fd-has-grid-column-span-${span}`];
  }
}
