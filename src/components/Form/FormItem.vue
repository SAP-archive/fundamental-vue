<template>
  <div class="fd-form__item" :class="classes">
    <slot />
    <slot name="message" />
  </div>
</template>

<script>
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
//    Some Text
//
// Radio/Check-Inputs: Renders Label, Radio Button (both in one block) and Some Text (new block)
// Note: Input is now inside the label.
// div .fd-form__item .fd-form__item--check
//  label(for=a) .fd-form__label
//    input(type=radio; id=a name=radio) .fd-form__control
//     Option 1

import { Uid } from "./../../mixins";

export default {
  mixins: [Uid],
  name: "FdFormItem",
  provide() {
    return {
      formItem: this,
      itemId: this.uid
    };
  },
  inject: {
    $formGroup: { from: "formGroup", default: null }
  },
  props: {
    inline: { type: Boolean, default: null }
  },
  methods: {
    setCheck(check) {
      this.check = check;
    }
  },
  computed: {
    hasLabel() {
      return this.label != null;
    },
    classes() {
      return {
        "fd-form__item--inline": this.computedInline,
        "fd-form__item--check": this.check
      };
    },
    formGroup() {
      return this.$formGroup;
    },
    computedInline() {
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
      check: false
    };
  }
};
</script>
