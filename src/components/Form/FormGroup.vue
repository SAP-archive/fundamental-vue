<template>
  <div class="fd-form__group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FdFormGroup",
  provide() {
    return {
      formGroup: this
    };
  },
  props: {
    inline: { type: Boolean, default: false }
  }
};
</script>
