import { iconClasses } from "./../lib";

export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: String,
      default: null,
      validator(size) {
        return ["s", "m", "l", "xl"].indexOf(size) >= 0;
      }
    }
  },
  computed: {
    // We are always returning an array of class names.
    // This is done because of the following reasons:
    // - By returning an array we can return an empty array in case icon is null.
    //   This makes it easier for consumers to use this mixin.
    iconClasses() {
      return iconClasses(this.icon, this.iconSize);
    }
  }
};
