import { Component, Prop, Base } from '@/core';
import { CalendarAction } from './CalendarAction';

interface Props {
  month: string;
  year: number;
  hasPrevious?: () => boolean;
  hasNext?: () => boolean;
}

@Component('CalendarHeader')
export class CalendarHeader extends Base<Props> {
  @Prop(String) public month!: string;
  @Prop(Number) public year!: number;

  @Prop({ type: Function, default: () => true })
  public hasPrevious!: () => boolean;

  @Prop({ type: Function, default: () => true })
  public hasNext!: () => boolean;

  public render() {
    return (
      <header class='fd-calendar__header'>
        <div class='fd-calendar__navigation'>
          <CalendarAction
            icon='slim-arrow-left'
            type={'standard'}
            disabled={!this.hasPrevious()}
            on-click={() => this.$emit('previous')}
          />
          <CalendarAction
           title={this.month}
           on-click={() => this.$emit('month')}
          />
          <CalendarAction
            title={String(this.year)}
            on-click={() => this.$emit('year')}
          />
          <CalendarAction
            type={'standard'}
            icon='slim-arrow-right'
            disabled={!this.hasNext()}
            on-click={() => this.$emit('next')}
          />
        </div>
      </header>
    );
  }
}
