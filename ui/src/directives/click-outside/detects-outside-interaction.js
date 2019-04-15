export const DETECTS_OUTSIDE_INTERACTION = "fdDetectsOutsideInteraction";

/**
 * @param {HTMLElement} el
 * @returns boolean
 */
export const outsideInteractionDetectionEnabled = ({ dataset }) => {
  return dataset[DETECTS_OUTSIDE_INTERACTION] === "true";
};

/**
 * @param {HTMLElement} el
 * @param {boolean=} detectionEnabled
 */
export const setOutsideDetectionInteractionEnabled = (
  { dataset },
  detectionEnabled
) => {
  if (detectionEnabled === null) {
    delete dataset[DETECTS_OUTSIDE_INTERACTION];
  } else {
    dataset[DETECTS_OUTSIDE_INTERACTION] = String(detectionEnabled || true);
  }
};

/** @type {import("vue").DirectiveFunction} */
const updateDirective = (el, { value }) => {
  setOutsideDetectionInteractionEnabled(el, value);
};

/** @type {import("vue").DirectiveOptions} */
const directive = {
  update: updateDirective,
  bind: updateDirective,
  unbind(el) {
    setOutsideDetectionInteractionEnabled(el);
  }
};

export default directive;
