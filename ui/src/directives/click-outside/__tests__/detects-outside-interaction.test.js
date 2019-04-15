import detectsOutsideInteraction, {
  outsideInteractionDetectionEnabled,
  DETECTS_OUTSIDE_INTERACTION
} from "./../detects-outside-interaction";

import { mount, createLocalVue } from "@vue/test-utils";
import Vue from "vue";

describe("detectsOutsideInteraction", () => {
  it("attaches correct data attribute with value = true", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        directives: {
          "detects-outside-interaction": detectsOutsideInteraction
        },
        template: `<div v-detects-outside-interaction="true" />`
      },
      { localVue }
    );
    await localVue.nextTick();
    const marker = wrapper.element.dataset[DETECTS_OUTSIDE_INTERACTION];
    expect(marker).toBeDefined();
    expect(marker.length).toBeGreaterThan(0);

    // Also test the getter
    expect(outsideInteractionDetectionEnabled(wrapper.element)).toBe(true);
  });

  it("attaches correct data attribute without value", async () => {
    const localVue = createLocalVue();
    const wrapper = mount(
      {
        directives: {
          "detects-outside-interaction": detectsOutsideInteraction
        },
        template: `<div v-detects-outside-interaction />`
      },
      { localVue }
    );
    await localVue.nextTick();
    const marker = wrapper.element.dataset[DETECTS_OUTSIDE_INTERACTION];
    expect(marker).toBeDefined();
    expect(marker.length).toBeGreaterThan(0);

    // Also test the getter
    expect(outsideInteractionDetectionEnabled(wrapper.element)).toBe(true);
  });
});
