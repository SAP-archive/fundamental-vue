import { CreateElement, VNode } from "vue";
import { shallowMount } from "@vue/test-utils";
import Panel from "../Panel.vue";

describe("Panel", () => {
  const title = "Panel Title";
  const description = "Panel description";
  const actions = "Actions";
  const filters = "Filters";
  const body = "Body";
  const footer = "Footer";

  const wrapper = shallowMount(Panel, {
    propsData: {
      title,
      description
    },
    slots: {
      actions: {
        render(h: CreateElement): VNode {
          return h("p", {}, actions);
        }
      },
      filters: {
        render(h: CreateElement): VNode {
          return h("p", {}, filters);
        }
      },
      default: {
        render(h: CreateElement): VNode {
          return h("p", {}, body);
        }
      },
      footer: {
        render(h: CreateElement): VNode {
          return h("p", {}, footer);
        }
      }
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct props and slots", () => {
    expect(wrapper.find(".fd-panel__title").text()).toEqual(title);
    expect(wrapper.find(".fd-panel__description").text()).toEqual(description);
    expect(wrapper.find(".fd-panel__actions").text()).toEqual(actions);
    expect(wrapper.find(".fd-panel__filters").text()).toEqual(filters);
    expect(wrapper.find(".fd-panel__body").text()).toEqual(body);
    expect(wrapper.find(".fd-panel__footer").text()).toEqual(footer);
  });

  describe("Title as slot", () => {
    const title = "Panel Title (slot)";
    const wrapper = shallowMount(Panel, {
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
      expect(wrapper.find(".fd-panel__title div").text()).toBe(title);
    });
  });

  describe("Description as slot", () => {
    const description = "Panel Description (slot)";
    const wrapper = shallowMount(Panel, {
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
      expect(wrapper.find(".fd-panel__description div").text()).toBe(
        description
      );
    });
  });
});
