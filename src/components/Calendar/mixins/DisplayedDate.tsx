import { componentName } from '@/util';
import { Component, Prop } from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';
import { monthFromDate, Month } from './../util';
import { Api } from '@/api';

const defaultDayNames = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'S'];
const defaultMonthNames = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];

interface Props {
  firstDayOfWeek?: number;
  dayNames?: string[];
  monthNames?: string[];
}

@Component({ name: componentName('DisplayedDate') })
export class DisplayedDate extends TsxComponent<Props> {
  @Api.prop('date displayed when calendar is shown and no other date has been selected.')
  @Prop({ type: [Date, String, Number], default: Date.now() })
  public defaultValue!: Date | string | number;

  public get defaultDate(): Date {
    const value = this.defaultValue;
    if(typeof value === 'string' || typeof value === 'number') {
      return new Date(value);
    }
    return value;
  }

  @Prop({ type: Number, default:0 })
  public firstDayOfWeek!: number;

  @Prop({ type: Array, default: () => defaultDayNames })
  public dayNames!: string[];

  @Prop({ type: Array, default: () => defaultMonthNames })
  public monthNames!: string[];

  public get adjustedDayNames(): string[] {
    return this.dayNames.concat(this.dayNames).slice(this.firstDayOfWeek, this.firstDayOfWeek + 7);
  }

  public get displayedMonth(): number {
    const date = this.displayedDate;
    return date.getMonth();
  }

  public set displayedMonth(month: number) {
    const copy = new Date(this.displayedDate);
    copy.setMonth(month);
    this.displayedDate = copy;
  }

  public displayedDate = this.defaultDate;
  public get month(): Month {
    const date = this.displayedDate;
    return monthFromDate(date, { firstDayOfWeek: this.firstDayOfWeek });
  }

  public get displayedYear() { return this.displayedDate.getFullYear(); }
  public set displayedYear(year: number) {
    const copy = new Date(this.displayedDate);
    copy.setFullYear(year);
    this.displayedDate = copy;
  }
}
