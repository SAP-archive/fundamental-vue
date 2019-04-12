import { mount } from "@vue/test-utils";
import ListGroup from "../ListGroup.vue";
import ListGroupItem from "../ListGroupItem.vue";

describe("ListGroup", () => {
  const createListElement = (h, index) => {
    const actionElement = h(
      "div",
      {
        slot: "action"
      },
      `Action ${index}`
    );
    return h(ListGroupItem, {}, [actionElement, `List Item ${index}`]);
  };

  const wrapper = mount(ListGroup, {
    slots: {
      default: {
        render(h) {
          const listElement1 = createListElement(h, 1);
          const listElement2 = createListElement(h, 2);
          return h("div", {}, [listElement1, listElement2]);
        }
      }
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("has correct number of list items", () => {
    expect(wrapper.findAll("li")).toHaveLength(2);
  });
});
