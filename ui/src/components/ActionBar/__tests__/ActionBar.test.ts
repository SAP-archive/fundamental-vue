import { CreateElement, VNode } from "vue";
import { shallowMount } from "@vue/test-utils";
import ActionBar from "../ActionBar.vue";

describe("ActionBar", () => {
  const title = "Page Title";
  const description = "Action bar description";
  const back = "Back";
  const actions = "Actions";

  const wrapper = shallowMount(ActionBar, {
    propsData: {
      title,
      description
    },
    slots: {
      back,
      default: actions
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct props and slots", () => {
    expect(wrapper.find(".fd-action-bar__title").text()).toEqual(title);
    expect(wrapper.find(".fd-action-bar__description").text()).toEqual(
      description
    );
    expect(wrapper.find(".fd-action-bar__back").text()).toEqual(back);
    expect(wrapper.find(".fd-action-bar__actions").text()).toEqual(actions);
  });

  describe("Without description", () => {
    const wrapper = shallowMount(ActionBar, {
      propsData: {
        title: "Page Title"
      },
      slots: {
        back: "Back",
        default: "Actions"
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("does not have description", () => {
      expect(wrapper.contains(".fd-action-bar__description")).toBe(false);
    });
  });

  describe("Title as slot", () => {
    const title = "Page Title (slot)";
    const wrapper = shallowMount(ActionBar, {
      slots: {
        title: {
          render(h: CreateElement): VNode {
            return h("div", {}, title);
          }
        }
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders title as slot", () => {
      expect(wrapper.find(".fd-action-bar__title div").text()).toBe(title);
    });
  });

  describe("Description as slot", () => {
    const description = "Page Description (slot)";
    const wrapper = shallowMount(ActionBar, {
      slots: {
        description: {
          render(h: CreateElement): VNode {
            return h("div", {}, description);
          }
        }
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders title as slot", () => {
      expect(wrapper.find(".fd-action-bar__description div").text()).toBe(
        description
      );
    });
  });
});
