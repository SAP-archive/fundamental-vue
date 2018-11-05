import {
  Component,
  Prop,
  Vue,
  Inject,
} from 'vue-property-decorator';

import { componentName } from '@/util';
import { ItemIdentification } from './../Types/ItemIdentification';

type State = 'default' | 'valid' | 'invalid' | 'warning';

@Component({ name: componentName('select') })
export class Select extends Vue {
  @Prop({ required: false, default: null, type: String }) public id!: string | null;
  @Prop({ required: false, default: 'default', type: String }) public state!: State;
  @Prop({ required: false, default: false, type: Boolean }) public required!: boolean;
  @Prop({ required: false, default: false, type: Boolean }) public disabled!: boolean;
  @Prop({ required: false, default: false, type: Boolean }) public readonly!: boolean;
  @Inject({ default: null }) public itemIdentificationProvider!: ItemIdentification | null;

  private get inputId(): string | null {
    const id = this.id;
    if (id != null) { return id; }
    const provider = this.itemIdentificationProvider;
    if (provider != null) {
      return provider.itemIdentifier;
    }
    return null;
  }

  public render() {
    const options = this.$slots.default;
    return <select id={this.inputId} readonly={this.readonly} disabled={this.disabled} class={this.classes}>{options}</select>;
  }

  private get classes() {
    return {
      'fd-form__control': true,
      'is-warning': this.state === 'warning',
      'is-invalid': this.state === 'invalid',
      'is-valid': this.state === 'valid',
      'is-required': this.required,
    };
  }
}
