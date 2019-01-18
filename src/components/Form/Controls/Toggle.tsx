import {
  Inject,
  Watch,
} from 'vue-property-decorator';
import { Model, Component, Prop, Base } from '@/core';
import { FormItem, FORM_ITEM_KEY } from './../FormItem';
import { isInputElement } from './Helper';

interface Props {
  id?: string | null;
  size?: ToggleSize | null;
  label?: string | null;
  on?: boolean;
}

const sizeMapping = {
  xs: 'Extra Small',
  s: 'Small',
  l: 'Large',
};
type ToggleSize = keyof (typeof sizeMapping);
const ToggleSizes = Object.keys(sizeMapping) as ToggleSize[];

@Component('Toggle')
export class Toggle extends Base<Props> {
  public mounted() {
    const item = this.formItem;
    if(item == null) { return; }
    item.setCheck(true);
  }

  @Inject({ from: FORM_ITEM_KEY, default: null})
  public formItem!: FormItem | null;

  private get formItemId(): string | null {
    const item = this.formItem;
    if(item == null) { return null; }
    return item.uid;
  }

  @Prop('size class', { acceptableValues: ToggleSizes,  type: String, default: null })
  public size!: ToggleSize | null;

  @Prop('whether toggle is disabled', { type: Boolean, default: false })
  public disabled!: boolean;

  @Model('whether toggle is checked', { event: 'input', default: false, type: Boolean })
  public on!: boolean;

  private currentOn = this.on;

  private handleChange() {
    this.$emit('input', this.currentOn);
  }

  private toggleState() {
    if(this.disabled) { return; }
    this.currentOn = !this.currentOn;
    this.handleChange();
  }

  @Watch('on', { immediate: true})
  public onChanged(on: boolean) {
    this.currentOn = on;
  }

  private onChange({ target }: Event) {
    if(target == null) {
      return;
    }
    if(isInputElement(target) && !this.disabled) {
      const checked = target.checked;
      this.currentOn = checked;
      this.handleChange();
    }
  }

  private get classes() {
    return {
      'fd-toggle': true,
      'fd-toggle--s': this.size === 's',
      'fd-toggle--xs': this.size === 'xs',
      'fd-toggle--l': this.size === 'l',
      'fd-form__control': true,
    };
  }

  public render() {
    const disabled = this.disabled ? true : null;
    return (
          <span on-click={this.toggleState} class={this.classes}>
            <input
              id={this.formItemId}
              type='checkbox'
              on-change={this.onChange}
              disabled={disabled}
              checked={this.currentOn}
            />
            <span class='fd-toggle__switch' role='presentation' />
          </span>
    );
  }
}
