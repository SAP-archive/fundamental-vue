import { mount } from "@vue/test-utils";
import Panel from "../Panel.vue";

describe("Panel", () => {
  const title = "Panel Title";
  const description = "Panel description";
  const actions = "Actions";
  const filters = "Filters";
  const body = "Body";
  const footer = "Footer";

  const wrapper = mount(Panel, {
    propsData: {
      title,
      description
    },
    slots: {
      actions: {
        render(h) {
          return h("p", {}, actions);
        }
      },
      filters: {
        render(h) {
          return h("p", {}, filters);
        }
      },
      default: {
        render(h) {
          return h("p", {}, body);
        }
      },
      footer: {
        render(h) {
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
    const wrapper = mount(Panel, {
      slots: {
        title: {
          render(h) {
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
    const wrapper = mount(Panel, {
      slots: {
        description: {
          render(h) {
            return h("div", {}, description);
          }
        }
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders title as slot", () => {
      expect(wrapper.find(".fd-panel__description div").text()).toBe(description);
    });
  });
});
