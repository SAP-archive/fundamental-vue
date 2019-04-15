import isInside, { INSIDE_CONTEXT } from "./../is-inside";
import { ClickOutside } from "./../../../mixins";

import { mount } from "@vue/test-utils";
import Vue from "vue";

describe("is-inside directive", () => {
  it("attaches is-inside-marker", () => {
    const wrapper = mount({
      mixins: [ClickOutside],
      directives: {
        "is-inside": isInside
      },
      template: `<div v-is-inside />`
    });
    const marker = wrapper.element.dataset[INSIDE_CONTEXT];
    expect(marker).toBeDefined();
    // @ts-ignore
    expect(marker.length).toBeGreaterThan(0);
  });

  it("removes is-inside-marker from node on destroy", async () => {
    const wrapper = mount({
      mixins: [ClickOutside],
      directives: {
        "is-inside": isInside
      },
      template: `<div v-is-inside />`
    });
    const marker = wrapper.element.dataset[INSIDE_CONTEXT];
    expect(marker).toBeDefined();
    // @ts-ignore
    expect(marker.length).toBeGreaterThan(0);
    wrapper.destroy();
    await Vue.nextTick();
    const marker2 = wrapper.element.dataset[INSIDE_CONTEXT];
    expect(marker2).toBeUndefined();
  });
});
