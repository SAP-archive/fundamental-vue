<template>
  <div class="fd-time__control">
    <Button
      :state="buttonState"
      :icon="icon"
      compact
      styling="light"
      :type="type"
      :aria-label="ariaLabel"
      :aria-controls="ariaControls"
      @click="$emit('click')"
    >{{title}}</Button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Prop } from "vue/types/options";
import ButtonTypes from "@/components/Button/ButtonTypes";
const isButtonType = (value: any) => ButtonTypes.indexOf(value) >= 0;
export default Vue.extend({
  name: "FdTimeAction",
  computed: {
    buttonState(): string {
      return this.disabled ? "disabled" : "normal";
    }
  },
  props: {
    title: String as Prop<string | null>,
    icon: String as Prop<string | null>,
    type: { type: String, validator: isButtonType },
    disabled: Boolean as Prop<Boolean | null>,
    ariaLabel: String as Prop<string | null>,
    ariaControls: String as Prop<string | null>
  }
});
</script>
