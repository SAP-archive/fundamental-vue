import { Month, Week, sameDay } from './../util';
import { CalendarItem, CalendarItemState } from './../CalendarItem';
import { Component, Prop, Base } from '@/core';

interface Props {
  dayNames: string[];
  month: Month;
  selectionEnd: Date | null;
  selectionStart: Date | null;
  displayedMonth: number;
  disabledDate: (date: Date) => boolean;
  blockedDate: (date: Date) => boolean;
  isPresent: (date: Date) => boolean;
  selectionContainsDate: (date: Date) => boolean;
}

@Component('DayPicker')
export class DayPicker extends Base<Props> {
  @Prop('dayNames', { type: Array })
  public dayNames!: string[];

  @Prop('month', { type: Array, default: () => [] })
  public month!: Month;

  @Prop('isPresent', { type: Function, default: () => false })
  public isPresent!: (date: Date) => boolean;

  @Prop('selectionEnd', { type: Date, default: null })
  public selectionEnd!: Date | null;

  @Prop('selectionStart', { type: Date, default: null })
  public selectionStart!: Date | null;

  @Prop('displayedMonth', { type: Number, default: 1 })
  public displayedMonth!: number;

  @Prop('disabledDate', { type: Function, default: () => false })
  public disabledDate!: (date: Date) => boolean;

  @Prop('blockedDate', { type: Function, default: () => false })
  public blockedDate!: (date: Date) => boolean;

  @Prop('selectionContainsDate', { type: Function, default: () => false })
  public selectionContainsDate!: (date: Date) => boolean;

  private renderWeek(week: Week) {
    return <tr class='fd-calendar__row'>{week.map(this.renderDate)}</tr>;
  }

  private renderDate(date: Date) {
    const isCurrent = this.isPresent(date);
    const { selectionStart, selectionEnd } = this;
    const isFirst = selectionStart != null ? sameDay(date, selectionStart) : false;
    const isLast = selectionEnd != null ? sameDay(date, selectionEnd) : false;
    const isFirstAndLast = isFirst && isLast;
    const isOtherMonth = this.displayedMonth !== date.getMonth();
    const state: CalendarItemState | null = ((vm: this) => {
      if(vm.disabledDate(date)) { return 'disabled'; }
      if(vm.blockedDate(date)) { return 'blocked'; }
      if(isFirstAndLast) { return 'selected'; }
      if(isFirst) { return 'selectedRangeFirst'; }
      if(isLast) { return 'selectedRangeLast'; }
      if(vm.selectionContainsDate(date)) { return 'selectedRange'; }
      return null;
    })(this);
    return (
      <CalendarItem
        on-click={() => this.$emit('select', date)}
        text={String(date.getDate())}
        modifier={isOtherMonth ? 'otherMonth' : (isCurrent ? 'current' : null)}
        state={state}
      />
    );
  }

  public render() {
    return (
      <div class='fd-calendar__dates' aria-hidden='false'>
        <table class='fd-calendar__table' role='grid'>
          <thead class='fd-calendar__group'>
            <tr class='fd-calendar__row'>
              {this.dayNames.map(dayName => (
                <th class='fd-calendar__column-header'>
                  <span class='fd-calendar__day-of-week'>{dayName}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody class='fd-calendar__group'>
            {this.month.map(week => this.renderWeek(week))}
          </tbody>
        </table>
      </div>
    );
  }
}
