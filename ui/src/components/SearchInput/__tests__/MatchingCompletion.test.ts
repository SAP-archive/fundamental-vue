import { mount } from "@vue/test-utils";
import FdMatchingCompletion from "./../MatchingCompletion.vue";

describe("MatchingCompletion", () => {
  it("renders remainingCompletion without prefix", () => {
    const wrapper = mount(FdMatchingCompletion, {
      propsData: {
        remainingCompletion: "hello",
        matchingPrefix: ""
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
  it("renders prefix", () => {
    const wrapper = mount(FdMatchingCompletion, {
      propsData: {
        remainingCompletion: "llo",
        matchingPrefix: "he"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
