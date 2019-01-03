import {
  Inject,
  Watch,
} from 'vue-property-decorator';
import { ItemIdentification } from './../Types/ItemIdentification';
import { Model, Component, Prop, Base } from '@/core';
import { FormItem, FORM_ITEM_KEY } from './../FormItem';

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

  @Inject({ from: FORM_ITEM_KEY, default: null}) public formItem!: FormItem | null;
  private get uid(): string {
    const item = this.formItem;
    if(item == null) { return ''; }
    return item.uid;
  }

  @Prop('size class', { acceptableValues: ToggleSizes,  type: String, default: null })
  public size!: ToggleSize | null;

  @Prop('whether toggle is disabled', { type: Boolean, default: false })
  public disabled!: boolean;

  @Model('whether toggle is checked', { event: 'input', default: false, type: Boolean })
  public on!: boolean;

  private currentOn = this.on;

  @Inject({ default: null })
  public itemIdentificationProvider!: ItemIdentification | null;

  private get inputId(): string | null {
    const id = this.uid;
    if (id != null) { return id; }
    const provider = this.itemIdentificationProvider;
    if (provider != null) {
      return provider.itemIdentifier;
    }
    return null;
  }

  @Watch('on', { immediate: true})
  public onChanged(value) {
    this.currentOn = value;
  }

  private onChange(event) {
    const checked = event.target.checked;
    this.currentOn = checked;
    this.$emit('input', this.currentOn);
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
          <span class={this.classes}>
            <input
              type='checkbox'
              on-change={this.onChange}
              disabled={disabled}
              id={this.inputId}
              checked={this.currentOn}
            />
            <span class='fd-toggle__switch' role='presentation' />
          </span>
    );
  }
}
