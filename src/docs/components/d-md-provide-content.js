// @ts-check

/**
 * @typedef {object} Content
 * @prop {any=} after;
 * @prop {any=} before;
 */

/** @param {Content} content */
const create = content => {
  return {
    provide() {
      return {
        $_fddMdSlots: {
          ...content
        }
      };
    }
  };
};
export default create;
