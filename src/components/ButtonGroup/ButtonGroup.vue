<template>
  <div class="fd-button-group" role="group">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import { Vue as VueInstance } from "vue/types/vue";

export default Vue.extend({
  name: "FdButtonGroup",
  provide() {
    return {
      $buttonContainer: this
    };
  },
  props: {
    activeButtonIndex: { type: Number, default: null } as PropValidator<
      number | null
    >,
    compact: { type: Boolean, default: false }
  },
  data() {
    return {
      currentActiveButtonIndex: this.activeButtonIndex
    };
  },
  watch: {
    activeButtonIndex: {
      immediate: true,
      handler(newIndex: number | null) {
        this.currentActiveButtonIndex = newIndex;
      }
    }
  },
  methods: {
    // ButtonContainer Implementation
    // compact already implemented
    didClickButton(button: VueInstance) {
      const index = this.indexOfButton(button);
      this.currentActiveButtonIndex = index;
      this.$emit("input", this.activeButtonIndex);
    },

    indexOfButton(button: VueInstance): number | null {
      const index = (this.$slots.default || []).indexOf(button.$vnode);
      return index > -1 ? index : null;
    },

    isButtonPressed(button: VueInstance): boolean {
      return this.indexOfButton(button) === this.activeButtonIndex;
    }
  }
});
</script>
