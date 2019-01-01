import { UidMixin, UidProps } from '@/mixins';
import { mixins } from 'vue-class-component';
import { VNodeChildren, CreateElement } from 'vue';
import { Inject, Provide } from 'vue-property-decorator';
import { Slot, ComponentProps, Base, Component, DefaultSlot, Prop } from '@/core';
import { FormLabel } from './../FormLabel';
import { FORM_ITEM_CONTAINER_KEY, FORM_ITEM_KEY, FORM_ITEM_ID_KEY } from './Types';
import { FormItemContainer } from './FormItemContainer';

interface Props extends UidProps {
  check?: boolean | null;
  inline?: boolean;
  label?: string;
}

// The way that HTML has to be genered is relatively complicated.
// This is because Fundamentals has unusual (?) requirements for the structure of the
// generated HTML:
//
// Non-Radio/Check-Inputs: Renders Label, Input Field and Some Text (one block each)
// div .fd-form__item
//  label(for=a) .fd-form__label
//    Normal Input:
//  input(type=text; id=a; placeholder="Field placeholder text") .fd-form__control
//  span .fd-form__message
//    Som Text
//
// Radio/Check-Inputs: Renders Label, Radio Button (both in one block) and Some Text (new block)
// Note: Input is now inside the label.
// div .fd-form__item .fd-form__item--check
//  label(for=a) .fd-form__label
//    input(type=radio; id=a name=radio) .fd-form__control
//    Option 1

@Component('FormItem')
@DefaultSlot('Content of the form item. Usually inputs and labels.')
@Slot('message', 'Custom instance of FdFormMessage.')
export class FormItem extends mixins(UidMixin) implements Base<Props> {
  @Provide(FORM_ITEM_KEY) public formItem = this;
  @Provide(FORM_ITEM_ID_KEY) public itemId = this.uid;
  @Inject({ from: FORM_ITEM_CONTAINER_KEY, default: null })
  public container!: FormItemContainer | null;

  @Prop({ type: Boolean, default: null })
  public inline!: boolean | null;
  private get computedInline(): boolean {
    const { inline } = this;
    if(inline != null) { return inline; }
    const container = this.container;
    if(container != null) { return container.inline; }
    return false;
  }

  @Prop({ type: String, default: null })
  public label!: string | null;

  private check = false;
  public setCheck(check: boolean) {
    this.check = check;
  }

  public $tsxProps!: ComponentProps<Props>;

  public render(h: CreateElement) {
    const label = this.label;
    const check = this.check;
    const control = this.$slots.default;
    const children = (): VNodeChildren => {
      if(label == null) { return control; }
      return [
        h(FormLabel, {}, [
          check ? control : undefined,
          label,
        ]),
        check ? undefined : control,
      ];
    };
    return h('div', {
      staticClass: 'fd-form__item',
      class: this.classes,
    }, [
      children(),
      this.$slots.message,
    ]);
  }

  private get classes() {
    return {
      'fd-form__item--inline': this.computedInline,
      'fd-form__item--check': this.check,
    };
  }
}
