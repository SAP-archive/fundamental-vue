import { backgroundColorClassName } from "./../lib";

const update = ({ classList }, { oldValue, value }) => {
  if (oldValue != null) {
    const oldClass = backgroundColorClassName(oldValue);
    if (classList.contains(oldClass)) {
      classList.remove(oldClass);
    }
  }
  if (value != null) {
    const newClass = backgroundColorClassName(value);
    if (!classList.add(newClass)) {
      classList.add(newClass);
    }
  }
};
export default {
  bind({ classList }, { arg, value }) {
    const color = arg || value;
    if (color == null) {
      return;
    }
    const colorClass = backgroundColorClassName(color);
    if (!classList.contains(colorClass)) {
      classList.add(colorClass);
    }
  },
  update
};
