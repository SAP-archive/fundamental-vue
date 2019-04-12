import PopperJS from "popper.js";

export default class Popper {
  static placements = PopperJS.placements;
  constructor() {
    return {
      destroy: () => {},
      scheduleUpdate: () => {}
    };
  }
}
