import { ItemIdentification } from './Types/ItemIdentification';
import {
  Component,
  Prop,
} from 'vue-property-decorator';
import { componentName } from '@/util';
import { Uid } from '@/mixins';
import { mixins } from 'vue-class-component';
import { Api } from '@/api';

interface Props {
  label?: string;
  check?: boolean;
  inline?: boolean;
  uid?: string; // Uid mixin
}

@Component({
  name: componentName('FormItem'),
  provide() {
    return {
      itemIdentificationProvider: this,
    };
  },
})
@Api.Component('Form Item')
@Api.defaultSlot('Content of the form item. Usually inputs and labels.')
export class FormItem extends mixins(Uid) implements ItemIdentification {
  @Prop({ type: String, required: false, default: null })
  public label!: string;

  @Prop({ type: Boolean, required: false, default: false })
  public check!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  public inline!: boolean;

  public $tsxProps!: Readonly<{}> & Readonly<Props>;

  public render() {
    return <div class={this.classes}>{this.$slots.default}</div>;
  }

  private get classes() {
    return {
      'fd-form__item': true,
      'fd-form__item--inline': this.inline,
      'fd-form__item--check': this.check,
    };
  }

  // ItemIdentification Impl.
  get itemIdentifier(): string | null {
    return this.uid;
  }
}
