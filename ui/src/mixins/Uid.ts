import Vue from "vue";
import { shortUuid } from "@/lib";
import { PropValidator } from "vue/types/options";

export default Vue.extend({
  props: {
    uid: {
      type: String,
      default: shortUuid
    } as PropValidator<string>
  }
});
