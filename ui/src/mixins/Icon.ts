import Vue from "vue";
import { PropValidator } from "vue/types/options";
import { iconClass, IconName } from "@/lib";

export interface IconProps {
  icon?: IconName;
}

export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: null
    } as PropValidator<string | null>
  },
  computed: {
    iconClassName(): string | null {
      return this.icon != null ? iconClass(this.icon) : null;
    }
  }
});
