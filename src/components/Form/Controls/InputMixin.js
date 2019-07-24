import { $enum, $default } from "./Helper/prop";
import { Compactable } from "./../../../mixins";

// The InputMixin can be used by input controls in order to gain a useful default set
// of props, injections and computed properties.
export default {
  inject: {
    itemId: { default: null }
  },
  mixins: [Compactable],
  props: {
    state: $enum("valid", "invalid", "warning"),
    required: $default(false),
    disabled: $default(false),
    readonly: $default(false),
    // If true, certain classes like fd-input and fd-form__control
    // are not added to the input-element.
    plain: $default(false)
  },
  computed: {
    inputClasses() {
      return {
        "fd-form__control": !this.plain,
        "fd-input--compact": this.finalCompact,
        "is-required": this.required,
        "is-valid": this.state === "valid",
        "is-invalid": this.state === "invalid",
        "is-warning": this.state === "warning"
      };
    },
    inputId() {
      return this.itemId;
    }
  }
};
