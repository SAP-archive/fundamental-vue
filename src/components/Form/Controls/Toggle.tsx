import {
  Component,
  Prop,
  Inject,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';
import { ItemIdentification } from './../Types/ItemIdentification';
import TsxComponent from '@/vue-tsx';

interface Props {
  id?: string | null;
  size?: ToggleSize | null;
  label?: string | null;
  value?: boolean;
}

const sizeMapping = {
  xs: 'Extra Small',
  s: 'Small',
  l: 'Large',
};
type ToggleSize = keyof (typeof sizeMapping);
const ToggleSizes = Object.keys(sizeMapping) as ToggleSize[];

@Component({ name: componentName('Toggle') })
@API.Component('Toggle')
export class Toggle extends TsxComponent<Props> {
  @API.Prop('id', prop => prop.type(String))
  @Prop({ required: false, default: null, type: String })
  public id!: string | null;

  @API.Prop('size class', prop => prop.type(String).acceptValues(...ToggleSizes))
  @Prop({ type: String, default: null, required: false })
  public size!: ToggleSize | null;

  @API.Prop('label', prop => prop.type(String))
  @Prop({ type: String, default: null, required: false })
  public label!: string | null;

  @API.Prop('whether toggle is disabled', prop => prop.type(Boolean))
  @Prop({ type: Boolean, default: false, required: false })
  public disabled!: boolean;

  @API.Prop('whether toggle is checked', prop => prop.type(Boolean))
  @Prop({ required: false, default: false, type: Boolean })
  public value!: boolean;

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

  public render() {
    const disabled = this.disabled ? true : null;
    return (
      <div class='fd-form__item fd-form__item--check'>
        <label class='fd-form__label' for={this.inputId}>
          <span class='fd-toggle fd-toggle--s fd-form__control'>
            <input
              type='checkbox'
              on-input={event => this.$emit('input', event.target.value)}
              disabled={disabled}
              name=''
              value={this.value}
              id={this.inputId}
              checked={this.value}
            />
            <span class='fd-toggle__switch' role='presentation' />
          </span>
          {this.label}
        </label>
      </div>
    );
  }
}
