import { componentName } from '@/util';
import { Component, Prop, Model, Watch } from 'vue-property-decorator';
import TsxComponent from '@/vue-tsx';
import { earlierDate, laterDate } from './../util';
import { Api } from '@/api';

const selectionModeMapping = { single: 'single', range: 'range' };
type SelectionMode = keyof typeof selectionModeMapping;
const SelectionModes = Object.keys(selectionModeMapping) as SelectionMode[];

@Component({ name: componentName('DateSelection') })
@Api.Component('Date Selection Mixin')
export class DateSelection extends TsxComponent<{}> {
  @Api.prop('Set the Selection Mode')
  @Prop({ type: String, validator: mode => SelectionModes.includes(mode), default: 'single' })
  public selectionMode!: SelectionMode;

  @Model('change', { type: Array, default: () => [] })
  public selection!: Date[];
  private currentDateSelection = this.selection;

  @Watch('selection', { immediate: true})
  public handleNewSelection(newVal) {
    this.currentDateSelection = newVal;
  }

  public resetSelection() {
    this.currentDateSelection = [];
    this.$emit('change', this.currentDateSelection);
  }

  private get dateSelectionNeedsReset() {
    return this.currentDateSelection.length === 2;
  }

  private emitCurrentSelection() {
    this.$emit('change', this.currentDateSelection);
  }

  public selectDate(date: Date) {
    if(this.selectionMode === 'single') {
      this.currentDateSelection = [date];
      this.emitCurrentSelection();
      return;
    }

    if(this.dateSelectionNeedsReset) {
      this.resetSelection();
    }

    const [selectionFrom] = this.currentDateSelection;
    if(selectionFrom == null) {
      this.currentDateSelection = [date];
      this.emitCurrentSelection();
      return;
    }
    this.currentDateSelection = [...this.currentDateSelection, date];
    this.emitCurrentSelection();
  }

  public get selectionStart(): Date | null {
    if(this.currentDateSelection.length === 0) { return null; }
    if(this.currentDateSelection.length === 1) { return this.currentDateSelection[0]; }
    const [from, to] = this.currentDateSelection;
    return earlierDate(from, to);
  }

  public get selectionEnd(): Date | null {
    if(this.currentDateSelection.length === 0) { return null; }
    if(this.currentDateSelection.length === 1) { return this.currentDateSelection[0]; }
    const [from, to] = this.currentDateSelection;
    return laterDate(from, to);
  }

  public selectionContains(date: Date): boolean {
    const { selectionStart: start, selectionEnd: end } = this;
    if(start == null || end == null) { return false; }
    const startDate = start.getTime();
    const endDate = end.getTime();
    const time = date.getTime();
    return time >= startDate && time <= endDate;
  }

  public selectionContainsYear(year: number): boolean {
    const { selectionStart: start, selectionEnd: end } = this;
    if(start == null && end == null) { return false; }
    if(start != null && end != null) {
      return year >= start.getFullYear() && year <= end.getFullYear();
    }
    if(start != null) { return start.getFullYear() === year; }
    if(end != null) { return end.getFullYear() === year; }
    return false;
  }

  public selectionContainsMonth(month: number): boolean {
    const { selectionStart: start, selectionEnd: end } = this;
    if(start == null && end == null) { return false; }
    if(start != null && end != null) {
      return month >= start.getMonth() && month <= end.getMonth();
    }
    if(start != null) { return start.getMonth() === month; }
    if(end != null) { return end.getMonth() === month; }
    return false;
  }
}
