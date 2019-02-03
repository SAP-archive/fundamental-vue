<template>
  <div class="fd-calendar__action">
    <Button
      compact
      styling="light"
      :type="type"
      :state="state"
      :icon="icon"
      @click="$emit('click')"
    >{{title}}</Button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import { Prop } from "vue/types/options";
import Button from "@/components/Button";
import ButtonTypes from "@/components/Button/ButtonTypes";

export default Vue.extend({
  name: "FdCalendarAction",
  components: { Button },
  props: {
    title: String as Prop<string | null>,
    icon: String as Prop<string | null>,
    disabled: { type: Boolean, default: false } as PropValidator<boolean>,
    type: {
      type: String,
      default: null,
      validator: (value: string) => ButtonTypes.indexOf(value) >= 0
    } as PropValidator<string | null>
  },
  computed: {
    state(): string {
      return this.disabled ? "disabled" : "normal";
    }
  }
});
</script>
