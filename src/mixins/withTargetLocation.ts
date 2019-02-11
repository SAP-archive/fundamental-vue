import Vue from "vue";
import { PropValidator } from "vue/types/options";
import { warn } from "@/core";
import { noop } from "@/util";

export default (defaultTo: string | object | null = null) =>
  Vue.extend({
    props: {
      to: { type: [String, Object], default: defaultTo } as PropValidator<
        string | object | null
      >
    },
    methods: {
      pushLocationIfPossible(event?: Event, onComplete?: typeof noop) {
        if (this.to == null || this.$router == null) {
          return;
        }
        this.pushLocation(event, onComplete);
      },
      pushLocation(event?: Event, onComplete?: typeof noop) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
        const { to, $router } = this;
        if (to == null) {
          warn(
            "Tried to navigate to push location but no location was provided."
          );
          return;
        }
        if ($router == null) {
          warn(`Tried to navigate to ${to} but $router not found.`);
          return;
        }
        $router.push(to, onComplete || noop);
        this.$emit("click", event);
      }
    }
  });
