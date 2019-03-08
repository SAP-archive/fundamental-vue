import Vue from "vue";
import { $enum, $default } from "./Helper/prop";

// The InputMixin can be used by input controls in order to gain a useful default set
// of props, injections and computed properties.
export default Vue.extend({
  inject: {
    itemId: { default: null }
  },
  props: {
    state: $enum("valid", "invalid", "warning"),
    required: $default(false),
    compact: $default(false),
    disabled: $default(false),
    readonly: $default(false)
  },
  computed: {
    inputStateClasses(): object {
      const { state } = this;
      return { [`is-${state}`]: state != null };
    },
    inputClasses(): object {
      return {
        "fd-input--compact": this.compact,
        ...this.inputStateClasses,
        "is-required": this.required
      };
    },
    inputId(): string | null {
      // @ts-ignore
      return this.itemId;
    }
  }
});
