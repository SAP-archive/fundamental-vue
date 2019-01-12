import { Event, Prop, Component, Base } from '@/core';
import { Checkbox } from '@/components/Form';

// Simply wraps a Checkbox in order to hide the ugly truth.
// See handleNativeClick for details. Is there a better way to do this?
@Component('RowSelectionIndicator')
@Event('change', 'Sent when the selection changed')
export class RowSelectionIndicator extends Base {
  @Prop('whether row is selected', {
    type: Boolean,
    default: false,
  })
  public selected!: boolean;

  @Prop('value', {
    type: [String, Number, Boolean],
    required: true,
  })
  public value!: string | number | boolean;

  // We have to handle native click events this way.
  // The code below stops event propagation if the event was caused
  // by a click on the checkbox itself. Otherwise the click event will
  // also be dispatched to the table row which also tries to modify
  // the table's selection.
  // Ths row selection indicator component is basically simply a checkbox
  // configured like this:
  //
  // <FdCheckbox
  //   :value="item.id"
  //   :modelValue="selected"
  //   @click.native.self.stop="$event.stopPropagation()"
  //   @change="changeSelection"
  // />
  private handleNativeClick(event: MouseEvent) {
    const { target } = event;
    const isTargetingSelf = target === this.$el;
    if(isTargetingSelf) {
      event.stopPropagation();
    }
  }

  private handleChange(selected: boolean, event: Event) {
    this.$emit('change', selected, event);
  }

  public render() {
    return (
      <Checkbox
        value={this.value}
        modelValue={this.selected}
        on-change={this.handleChange}
        nativeOn-click={this.handleNativeClick}
      />
    );
  }
}
