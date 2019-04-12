import { shortUuid } from "./../lib";

export default {
  props: {
    uid: {
      type: String,
      default: shortUuid
    }
  }
};
