export const isElement = target => "tagName" in target;
export const isInputElement = target => isElement(target) && target.tagName === "INPUT";
