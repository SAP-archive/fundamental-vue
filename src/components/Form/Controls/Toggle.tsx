import {
  Component,
  Prop,
  Inject,
  Model,
  Watch,
} from 'vue-property-decorator';
import { Api } from '@/api';
import { componentName } from '@/util';
import { ItemIdentification } from './../Types/ItemIdentification';
import TsxComponent from '@/vue-tsx';

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

@Component({ name: componentName('Toggle') })
@Api.Component('Toggle')
export class Toggle extends TsxComponent<Props> {
  @Api.Prop('id', prop => prop.type(String))
  @Prop({ required: false, default: null, type: String })
  public id!: string | null;

  @Api.Prop('size class', prop => prop.type(String).acceptValues(...ToggleSizes))
  @Prop({ type: String, default: null, required: false })
  public size!: ToggleSize | null;

  @Api.Prop('label', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public label!: string | null;

  @Api.Prop('whether toggle is disabled', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
  public disabled!: boolean;

  @Api.Prop('whether toggle is checked', prop => prop.type(Boolean))
  @Model('input', { default: false, type: Boolean })
  public on!: boolean;

  private currentOn = this.on || false;

  @Inject({ default: null }) public itemIdentificationProvider!: ItemIdentification | null;

  get inputId(): string | null {
    const id = this.id;
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
      <div class='fd-form__item fd-form__item--check'>
        <label class='fd-form__label' for={this.inputId}>
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
          {this.label}
        </label>
      </div>
    );
  }
}
