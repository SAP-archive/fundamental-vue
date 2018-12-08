import { componentName } from '@/util';
import {
  Component,
  Prop,
  Watch,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { ButtonContainer } from './ButtonContainer';
import { Button } from './Button';
import TsxComponent from '@/vue-tsx';

interface Props {
  compact?: boolean;
  value?: number | null;
}

@Component({
  name: componentName('ButtonGroup'),
  provide() {
    return {
      buttonContainer: this,
    };
  },
})
@Api.Component('Button Group')
@Api.Event('input', 'triggers when index of active button changes', ['activeButtonIndex', Number])
@Api.defaultSlot('Buttons to be displayed in a group')
export class ButtonGroup extends TsxComponent<Props> implements ButtonContainer {
  @Api.Prop('whether button group is compact', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
  public compact!: boolean;

  @Api.Prop('index of active button', prop => prop.type(Number))
  @Prop({ type: Number, default: null, required: false })
  public value!: number | null;

  public activeButtonIndex: number | null = this.value || null;

  @Watch('value', { immediate: true })
  public handleNewValue(newValue: number | null) {
    this.activeButtonIndex = newValue;
  }
  public render() {
    return (
      <div class='fd-button-group' role='group'>
        {this.$slots.default}
      </div>
    );
  }

  // ButtonContainer Implementation
  // compact already implemented
  public didClickButton(button: Button) {
    const index = this.indexOfButton(button);
    this.activeButtonIndex = index;
    this.$emit('input', this.activeButtonIndex);
  }

  private indexOfButton(button: Button): number | null {
    const index = this.$slots.default.indexOf(button.$vnode);
    return index > -1 ? index : null;
  }

  public isButtonPressed(button: Button): boolean {
    return this.indexOfButton(button) === this.activeButtonIndex;
  }
}
