import { iconClasses } from "./../lib";

const sizeFrom = ({ s, m, l, xl }) => {
  if (s != null) {
    return "s";
  }
  if (m != null) {
    return "m";
  }
  if (l != null) {
    return "l";
  }
  if (xl != null) {
    return "xl";
  }
};
export default ({ classList }, { value, arg, modifiers }) => {
  const classes = iconClasses(arg || value, sizeFrom(modifiers));
  classes.forEach(iconClass => {
    if (!classList.contains(iconClass)) {
      classList.add(iconClass);
    }
  });
};
