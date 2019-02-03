<template>
  <div class="fd-form__item" :class="classes">
    <slot v-if="!hasLabel"/>
    <FormLabel v-if="hasLabel">
      <slot v-if="check"/>
      {{label}}
    </FormLabel>
    <slot v-if="!check && hasLabel"/>
    <slot name="message"/>
  </div>
</template>

<script lang="ts">
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

import { mixins, Uid } from "@/mixins2";
import { FormGropInterface } from "./FormGroupInterface";
import FormLabel from "./FormLabel.vue";
import { PropValidator } from "vue/types/options";

export default mixins(Uid).extend({
  name: "FdFormItem",
  components: { FormLabel },
  provide(): object {
    return {
      formItem: this,
      itemId: this.uid
    };
  },
  inject: {
    $formGroup: { from: "formGroup", default: null }
  },
  props: {
    inline: { type: Boolean, default: null } as PropValidator<boolean | null>,
    label: { type: String, default: null } as PropValidator<string | null>
  },
  methods: {
    setCheck(check: boolean): void {
      this.check = check;
    }
  },
  computed: {
    hasLabel(): boolean {
      return this.label != null;
    },
    classes(): object {
      return {
        "fd-form__item--inline": this.computedInline,
        "fd-form__item--check": this.check
      };
    },
    formGroup(): FormGropInterface | null {
      // @ts-ignore
      return this.$formGroup as FormGropInterface | null;
    },
    computedInline(): boolean {
      const { inline } = this;
      if (inline != null) {
        return inline;
      }
      const container = this.formGroup;
      if (container != null) {
        return container.inline;
      }
      return false;
    }
  },
  data() {
    return {
      check: false as boolean
    };
  }
});
</script>
