<template>
  <div class="fd-time__input">
    <FdInput
      :id="id"
      maxlength="2"
      type="text"
      :aria-label="ariaLabel"
      :value="value"
      :placeholder="placeholder"
      @update="handleInput"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FdInput from "@/components/Form/Controls/Input.vue";

export default Vue.extend({
  name: "FdTimeInput",
  components: { FdInput },
  props: {
    id: String, // TODO: This is not optimal. We should use the mixin for that and rename it.
    placeholder: String,
    value: { type: [String, Number], default: "" },
    ariaLabel: String
  },
  methods: {
    handleInput(newValue: string) {
      this.$emit("input", newValue);
    }
  }
});
</script>
