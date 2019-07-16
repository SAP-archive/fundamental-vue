<template>
  <div class="fd-form__item fd-form__item--check" :class="classes">
    <fd-form-label :inline="inline_">
      <template #control>
        <slot />
        {{ label }}
      </template>
    </fd-form-label>
  </div>
</template>

<script>
import FdFormLabel from "./../FormLabel.vue";

export default {
  name: "FdFormItemRadio",
  components: { FdFormLabel },
  inject: {
    formGroup: {
      default: { inline: null }
    }
  },
  props: {
    label: {
      type: String,
      default: null
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inline_() {
      return this.formGroup.inline != null ? this.formGroup.inline : this.inline;
    },
    classes() {
      return {
        "fd-form__item--inline": this.inline_
      };
    }
  }
};
</script>
