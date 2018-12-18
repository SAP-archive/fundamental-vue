import { componentName } from '@/util';
import { Component, Prop } from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';
import { CalendarItem, CalendarItemState } from './../CalendarItem';

interface Props {
  maxDate: Date;
  minDate: Date;
  years: number[];
  presentYear: number;
  selectionContainsYear: (year: number) => boolean;
}

@Component({ name: componentName('YearPicker') })
export class YearPicker extends TsxComponent<Props> {
  @Prop(Date)
  public maxDate!: Date;

  @Prop(Date)
  public minDate!: Date;

  @Prop({ type: Array, default: () => [] })
  public years!: number[];

  @Prop({ type: Number, default: 0 })
  public presentYear!: number;

  @Prop({ type: Function, default: () => false })
  public selectionContainsYear!: (year: number) => boolean;

  private isValidYear(year: number): boolean {
    const maxYear = this.maxDate.getFullYear();
    const minYear = this.minDate.getFullYear();
    return year <= maxYear && year >= minYear;
  }

  private stateForYear(year: number): CalendarItemState | null {
    if(this.isValidYear(year) === false) {
      return 'disabled';
    }
    return this.selectionContainsYear(year) ? 'selected' : null;
  }

  public render() {
    return (
      <div class='fd-calendar__years' aria-hidden={false}>
        <ul class='fd-calendar__list'>
          {this.years.map(year => (
            <CalendarItem
              tag='li'
              text={String(year)}
              state={this.stateForYear(year)}
              modifier={this.presentYear === year ? 'current' : null}
              on-click={() => this.$emit('select', year)}
            />
            ),
          )}
        </ul>
      </div>
    );
  }
}
