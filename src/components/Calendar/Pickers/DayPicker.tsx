import { componentName } from '@/util';
import { Component, Prop } from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';
import { Month, Week, sameDay } from './../util';
import { CalendarItem, CalendarItemState } from './../CalendarItem';

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

@Component({ name: componentName('DayPicker') })
export class DayPicker extends TsxComponent<Props> {
  @Prop(Array) public dayNames!: string[];

  @Prop({ type: Array, default: () => [] })
  public month!: Month;

  @Prop({ type: Function, default: () => false })
  public isPresent!: (date: Date) => boolean;

  @Prop({ type: Date, default: null })
  public selectionEnd!: Date | null;

  @Prop({ type: Date, default: null })
  public selectionStart!: Date | null;

  @Prop({ type: Number, default: 1 })
  public displayedMonth!: number;

  @Prop({ type: Function, default: () => false })
  public disabledDate!: (date: Date) => boolean;

  @Prop({ type: Function, default: () => false })
  public blockedDate!: (date: Date) => boolean;

  @Prop({ type: Function, default: () => false })
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
