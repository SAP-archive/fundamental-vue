import { componentName } from '@/util';
import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { CreateElement } from 'vue';
import TsxComponent from '@/vue-tsx';

// Map modifier to CSS class name
const calendarItemModifierMapping = {
  // Apply to dates outside the current month
  otherMonth: 'fd-calendar__item--other-month',
  // Apply to the current today, this month, this year'
  current: 'fd-calendar__item--current',
  // Cannot be selected, usually applied to a large range of past or future dates
  disabled: 'fd-calendar__item--disabled',
  // Cannot be selected, usually applied to blackout or booked dates mixed in with available dates
  // blocked: 'fd-calendar__item--blocked',
};
type CalendarItemModifier = keyof typeof calendarItemModifierMapping;
const CalendarItemModifiers = Object.keys(calendarItemModifierMapping) as CalendarItemModifier[];
const CalendarItemModifierValidator = (value: any): boolean => value === null || CalendarItemModifiers.includes(value);

// Map modifier to CSS class name
const calendarItemStateMapping = {
  disabled: 'is-disabled',
  blocked: 'is-blocked',
  // Currently selected date AND the first and last dates in a range
  selected: 'is-selected',
  // A date in the range between the first and last selected dates
  selectedRange: 'is-selected-range',
  // The first date in a selected range
  selectedRangeFirst: 'is-selected-range-first',
  // The last date in a selected range
  selectedRangeLast: 'is-selected-range-last',

};
export type CalendarItemState = keyof typeof calendarItemStateMapping;
const CalendarItemStates = Object.keys(calendarItemStateMapping) as CalendarItemState[];
const CalendarItemStatesValidator = (value: any): boolean => value === null || CalendarItemStates.includes(value);

interface Props {
  modifier?: CalendarItemModifier | null;
  state?: CalendarItemState | null;
  text?: string;
  tag?: string;
}

@Component({ name: componentName('CalendarItem') })
export class CalendarItem extends TsxComponent<Props> {
  // This is the HTML-tag used when rendering the item.
  // We need this flexibility because sometimes a calendar item is rendered
  // as a table column (<td>…</td>) and sometimes it is rendered as a list
  // item (<li>…</li>). For examples please refer to the official fundamental
  // documentation:
  // https://sap.github.io/fundamental/components/calendar.html
  //
  // Specifically have a look at the standard calendar with selectable days
  // and compare it to the 'calendar' which allows the selection of months only.
  @Prop({ default: 'td', type: String })
  public tag!: string;

  @Prop({ default: '', type: String })
  public text!: string;

  @Prop({ default: null, type: String, validator: CalendarItemModifierValidator })
  public modifier!: CalendarItemModifier | null;

  @Prop({ default: null, type: String, validator: CalendarItemStatesValidator })
  public state!: CalendarItemState | null;

  public render(h: CreateElement) {
    const vm = this;
    return h(
      this.tag, {
        on: {
          click(event: Event) {
            // We don't want to emit a click if the item is disabled or blocked.
            const state = vm.state || '';
            if(['disabled', 'blocked'].includes(state)) {
              event.stopImmediatePropagation();
              return;
            }
            vm.$emit('click');
          },
        },
        staticClass: 'fd-calendar__item',
        class: this.classes,
      },
      [
        h('span', { staticClass: 'fd-calendar__text' }, this.text), // render item text
      ],
    );
  }

  private get stateClasses() {
    const state = this.state;
    if(state == null) {
      return [];
    }
    const isFirstOrLast = state === 'selectedRangeFirst' || state === 'selectedRangeLast';
    return [...(isFirstOrLast ? [calendarItemStateMapping.selected] : []), calendarItemStateMapping[state]];
  }

  private get classes() {
    const stateClasses = this.stateClasses;
    const modifier = this.modifier;
    return stateClasses.concat(modifier == null ? [] : calendarItemModifierMapping[modifier]);
  }
}
