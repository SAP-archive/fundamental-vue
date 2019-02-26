export const isElement = (target: EventTarget): target is Element =>
  "tagName" in target;
export const isInputElement = (
  target: EventTarget
): target is HTMLInputElement =>
  isElement(target) && target.tagName === "INPUT";
