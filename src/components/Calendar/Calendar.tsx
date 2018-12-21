import { componentName } from '@/util';
import { Component, Prop } from 'vue-property-decorator';
import { ComponentProps } from '@/vue-tsx';
import { CalendarHeader } from './CalendarHeader';
import { PresentDate, DisplayedDate, DateSelection } from './mixins';
import { mixins } from 'vue-class-component';
import { MonthPicker, YearPicker, DayPicker } from './Pickers';
import { Api } from '@/api';

const pickerMapping = { year: 'year', month: 'month' };
type PickerType = keyof typeof pickerMapping;

interface Props {
  maxDate?: Date;
  minDate?: Date;
  disabledDate?: (date: Date) => boolean;
  blockedDate?: (date: Date) => boolean;
  hasPrevious?: (range: {min: Date, max: Date}) => boolean;
  hasNext?: (range: {min: Date, max: Date}) => boolean;
}

const dateWithYearsFromNow = (numberOfYears: number) => {
  const date = new Date(Date.now());
  date.setFullYear(date.getFullYear() + numberOfYears);
  return date;
};

type ValidationRequest = { min: Date, max: Date };

@Component({ name: componentName('Calendar') })
@Api.Component('Calendar')
export class Calendar extends mixins(PresentDate, DisplayedDate, DateSelection) {
  public $tsxProps!: ComponentProps<Props>;

  @Api.prop('whether header is shown')
  @Prop({ type: Boolean, default: true })
  public headerVisible!: boolean;

  @Api.prop('maximum date', { defaultValue: 'now + 10 years'})
  @Prop({ type: Date, default: () => dateWithYearsFromNow(10)})
  public maxDate!: Date;

  @Api.prop('minimum date', { defaultValue: 'now - 10 years'})
  @Prop({ type: Date, default: () => dateWithYearsFromNow(-10)})
  public minDate!: Date;

  @Api.prop(
    'Called with a date to be displayed by the calendar. Return false to disable the date.',
    { defaultValue: '() => false' },
  )
  @Prop({ type: Function, default: () => false })
  public disabledDate!: (date: Date) => boolean;

  @Api.prop(
    'Called with a date to be displayed by the calendar. Return false to block the date.',
    { defaultValue: '() => false' },
  )
  @Prop({ type: Function, default: () => false })
  public blockedDate!: (date: Date) => boolean;

  @Api.prop(
    'Called with a date range object ({ min: Date, max: Date }). Return false to disable the previous button in the header.',
    { defaultValue: '() => true' },
  )
  @Prop({ type: Function, default: () => true })
  public hasPrevious!: (range: {min: Date, max: Date}) => boolean;

  @Api.prop(
    'Called with a date range object ({ min: Date, max: Date }). Return false to disable the next button in the header.',
    { defaultValue: '() => true' },
  )
  @Prop({ type: Function, default: () => true })
  public hasNext!: (range: {min: Date, max: Date}) => boolean;

  // Switching between Pickers
  private currentPicker: PickerType | null = null;

  private toggleMonthPicker() {
    this.togglePicker('month');
  }

  private toggleYearPicker() {
    this.togglePicker('year');
  }

  private togglePicker(pickerType: PickerType) {
    if(this.currentPicker === pickerType) {
      this.currentPicker = null;
      return;
    }
    this.currentPicker = pickerType;
  }

  // Validation
  private minDateValidator({min}: ValidationRequest): boolean {
    return min.getFullYear() >= this.minDate.getFullYear();
  }

  private get previousButtonEnabled(): boolean {
    const range = this.currentRange;
    return this.hasPrevious(range) && this.minDateValidator(range);
  }

  private maxDateValidator({max}: ValidationRequest): boolean {
    return max.getFullYear() <= this.maxDate.getFullYear();
  }

  private get nextButtonEnabled(): boolean {
    const range = this.currentRange;
    return this.hasNext(range) && this.maxDateValidator(range);
  }

  // Selecting Dates

  private didClickDate(date: Date) {
    this.selectDate(date);
  }

  private get displayedMonthName(): string | null {
    const month = this.displayedMonth;
    if(month == null) { return null; }
    return this.monthNames[month];
  }

  private nextYear() {
    const delta = this.currentPicker === 'month' ? 1 : 12;
    const copy = new Date(this.displayedDate);
    copy.setFullYear(this.displayedDate.getFullYear() + delta);
    this.displayedDate = copy;
  }

  private displayPreviousYear() {
    const delta = this.currentPicker === 'month' ? 1 : 12;
    const copy = new Date(this.displayedDate);
    copy.setFullYear(this.displayedDate.getFullYear() - delta);
    this.displayedDate = copy;
  }

  private displayNextMonth() {
    const copy = new Date(this.displayedDate);
    copy.setMonth(this.displayedDate.getMonth() + 1);
    this.displayedDate = copy;
  }

  private displayPreviousMonth() {
    const copy = new Date(this.displayedDate);
    copy.setMonth(this.displayedDate.getMonth() - 1);
    this.displayedDate = copy;
  }

  private next() {
    if(this.currentPicker == null) {
      this.displayNextMonth();
      return;
    }
    this.nextYear();
  }

  private previous() {
    if(this.currentPicker == null) {
      this.displayPreviousMonth();
      return;
    }
    this.displayPreviousYear();
  }

  private didClickOnMonth(month: number) {
    this.displayedMonth = month;
    this.currentPicker = null;
  }

  private didClickOnYear(year: number) {
    this.displayedYear = year;
    this.currentPicker = null;
  }

  private renderMonthPicker() {
    return (
      <MonthPicker
        monthNames={this.monthNames}
        presentMonth={this.presentMonth}
        selectionContainsMonth={this.selectionContainsMonth}
        on-select={this.didClickOnMonth}
      />
    );
  }

  private renderDayPicker() {
    return (
      <DayPicker
        dayNames={this.adjustedDayNames}
        month={this.month}
        selectionEnd={this.selectionEnd}
        selectionStart={this.selectionStart}
        displayedMonth={this.displayedMonth}
        disabledDate={this.disabledDate}
        blockedDate={this.blockedDate}
        isPresent={this.isPresent}
        selectionContainsDate={this.selectionContains}
        on-select={this.didClickDate}
      />
    );
  }

  private renderYearPicker() {
    const years = Array.from({ length: 12}).map((_, index) => (this.displayedYear + (index - 6)));
    return (
      <YearPicker
        minDate={this.minDate}
        maxDate={this.maxDate}
        years={years}
        presentYear={this.presentYear}
        selectionContainsYear={this.selectionContainsYear}
        on-select={this.didClickOnYear}
      />
    );
  }

  private get currentRange(): { min: Date, max: Date } {
    const month = this.month;
    const lastWeek = month[month.length - 1];
    const min = month[0][0];
    const max = lastWeek[lastWeek.length - 1];
    return {
      min,
      max,
    };
  }

  public render() {
    return (
      <div class='fd-calendar'>
      {this.headerVisible &&
        <CalendarHeader
          month={this.displayedMonthName || ''}
          year={this.displayedYear}
          on-previous={this.previous}
          on-next={this.next}
          on-month={this.toggleMonthPicker}
          on-year={this.toggleYearPicker}
          hasNext={() => this.nextButtonEnabled}
          hasPrevious={() => this.previousButtonEnabled}
        />
      }
        <div class='fd-calendar__content'>
          {this.currentPicker === 'month' && this.renderMonthPicker()}
          {this.currentPicker === 'year' && this.renderYearPicker()}
          {this.currentPicker == null && this.renderDayPicker()}
        </div>
      </div>
    );
  }
}
