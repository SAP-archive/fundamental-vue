import {
  Component,
  Prop,
  Inject,
  Vue,
} from 'vue-property-decorator';
import { API } from '@/api';
import { componentName } from '@/util';
import { ItemIdentification } from './../Types/ItemIdentification';

const sizeMapping = {
  xs: 'Extra Small',
  s: 'Small',
  l: 'Large',
};
type ToggleSize = keyof (typeof sizeMapping);
const ToggleSizes = Object.keys(sizeMapping) as ToggleSize[];

@Component({ name: componentName('toggle') })
@API.Component('Toggle')
export class Toggle extends Vue {
  @Prop({ required: false, default: null, type: String })
  @API.Prop('id', prop => prop.type(String))
  public id!: string | null;

  @Prop({ type: String, default: null, required: false })
  @API.Prop('size class', prop => prop.type(String).acceptValues(...ToggleSizes))
  public size!: ToggleSize | null;

  @Prop({ type: String, default: null, required: false })
  @API.Prop('label', prop => prop.type(String))
  public label!: string | null;

  @Prop({ type: Boolean, default: false, required: false })
  @API.Prop('whether toggle is disabled', prop => prop.type(Boolean))
  public disabled!: boolean;

  @Prop({ required: false, default: false, type: Boolean })
  @API.Prop('whether toggle is checked', prop => prop.type(Boolean))
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
