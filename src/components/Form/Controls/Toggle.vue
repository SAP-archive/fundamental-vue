<template>
  <span :class="classes">
    <input
      :id="formItemId"
      type="checkbox"
      @change="onChange"
      :disabled="disabled"
      :checked="currentOn"
    />
    <span class="fd-toggle__switch" role="presentation" />
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import { isInputElement } from "./Helper";
import { PropValidator } from "vue/types/options";

const sizeMapping = {
  xs: "xs",
  s: "s",
  l: "l"
};
const ToggleSizes = Object.values(sizeMapping);
const isToggleSize = (value: string) => ToggleSizes.indexOf(value) >= 0;
export default Vue.extend({
  name: "FdToggle",
  model: {
    prop: "on",
    event: "input"
  },
  inject: {
    formItem: { default: null }
  },
  props: {
    size: {
      type: String,
      default: null,
      validator: isToggleSize
    } as PropValidator<string>,
    on: { type: Boolean, default: false } as PropValidator<boolean>,
    disabled: { type: Boolean, default: false } as PropValidator<boolean>
  },
  mounted() {
    // @ts-ignore
    const formItem = this.formItem;
    if (formItem) {
      formItem.setCheck(true);
    }
  },

  computed: {
    classes(): object {
      return {
        "fd-toggle": true,
        "fd-toggle--s": this.size === "s",
        "fd-toggle--xs": this.size === "xs",
        "fd-toggle--l": this.size === "l",
        "fd-form__control": true
      };
    },
    formItemId(): string | null {
      // @ts-ignore
      const item = this.formItem;
      if (item == null) {
        return null;
      }
      return item.uid;
    }
  },
  watch: {
    on: {
      immediate: true,
      handler(newOn: boolean) {
        this.currentOn = newOn;
      }
    }
  },
  methods: {
    onChange({ target }: Event) {
      if (target == null) {
        return;
      }
      if (isInputElement(target) && !this.disabled) {
        const checked = target.checked;
        this.currentOn = checked;
        this.handleChange();
      }
    },
    handleChange(): void {
      this.$emit("input", this.currentOn);
    },

    toggleState(): void {
      if (this.disabled) {
        return;
      }
      this.currentOn = !this.currentOn;
      this.handleChange();
    }
  },
  data() {
    return {
      currentOn: this.on
    };
  }
});
</script>
