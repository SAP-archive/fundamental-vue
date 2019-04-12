import { iconClass } from "./../lib";

export default {
  props: {
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    // We are always returning an array of class names.
    // This is done because of the following reasons:
    // - By returning an array we can return an empty array in case icon is null.
    //   This makes it easier for consumers to use this mixin.
    // - We may return more than one class in the futre. Possible use case is to
    //   add another prop that specifies the icon size.
    iconClasses() {
      return this.icon != null ? [iconClass(this.icon)] : [];
    }
  }
};
