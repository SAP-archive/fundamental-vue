import { mount } from "@vue/test-utils";
import ListGroupItem from "../ListGroupItem.vue";

describe("ListGroup", () => {
  const createActionElement = (h, index) => {
    return h(
      "div",
      {
        class: "action-element",
        slot: "action"
      },
      `Action ${index}`
    );
  };

  const wrapper = mount(ListGroupItem, {
    slots: {
      default: "List Item 1",
      action: {
        render(h) {
          const actionElement1 = createActionElement(h, 1);
          const actionElement2 = createActionElement(h, 2);
          return h("div", {}, [actionElement1, actionElement2]);
        }
      }
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("has correct number of actions", () => {
    expect(wrapper.findAll(".action-element")).toHaveLength(2);
  });
});
