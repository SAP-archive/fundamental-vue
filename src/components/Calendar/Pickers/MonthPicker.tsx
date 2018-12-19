import { componentName } from '@/util';
import {
  Component,
  Prop,
} from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';
import { CalendarItem } from './../CalendarItem';

interface Props {
  monthNames: string[];
  presentMonth?: number;
  selectionContainsMonth?: (month: number) => boolean;
}

@Component({ name: componentName('MonthPicker') })
export class MonthPicker extends TsxComponent<Props> {
  @Prop(Array) public monthNames!: string[];

  @Prop({ type: Number, default: 0 })
  public presentMonth!: number;

  @Prop({ type: Function, default: () => false })
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
