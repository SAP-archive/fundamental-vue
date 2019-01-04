import { CalendarItem } from './../CalendarItem';
import { Component, Prop, Base } from '@/core';

interface Props {
  monthNames: string[];
  presentMonth?: number;
  selectionContainsMonth?: (month: number) => boolean;
}

@Component('MonthPicker')
export class MonthPicker extends Base<Props> {
  @Prop('monthNames', Array)
  public monthNames!: string[];

  @Prop('presentMonth', { type: Number, default: 0 })
  public presentMonth!: number;

  @Prop('selectionContainsMonth', { type: Function, default: () => false })
  public selectionContainsMonth!: (month: number) => boolean;

  public render() {
    return (
      <div class='fd-calendar__months' aria-hidden={false}>
        <ul class='fd-calendar__list'>
          {this.monthNames.map((month, index) => (
          <CalendarItem
            tag='li'
            text={month}
            state={this.selectionContainsMonth(index) ? 'selected' : null}
            modifier={this.presentMonth === index ? 'current' : null}
            on-click={() => this.$emit('select', index)}
          />))}
        </ul>
      </div>
    );
  }
}
