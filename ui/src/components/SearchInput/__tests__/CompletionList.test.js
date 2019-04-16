import { mount } from "@vue/test-utils";
import FdCompletionList from "./../CompletionList.vue";
import FdMenuItem from "./../../Menu/MenuItem.vue";

// A little neat helper to create a completion list
const createCompletionList = (predicate, completions) => {
  const propsData = { predicate, completions };
  return mount(FdCompletionList, {
    propsData
  });
};

describe("Completion List", () => {
  it("renders no menu items when no completions are given", () => {
    const wrapper = createCompletionList("", []);
    const menuItems = wrapper.findAll(FdMenuItem);
    expect(menuItems).toHaveLength(0);
  });

  it("renders empty list correctly", () => {
    const wrapper = createCompletionList("", []);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders menu items with correct text", () => {
    const completions = ["Apple", "Peach", "Banana"];
    const wrapper = createCompletionList("", completions);
    const menuItems = wrapper.findAll(FdMenuItem);
    expect(menuItems).toHaveLength(3);
    const [appleItem, peachItem, bananaItem] = menuItems.wrappers;
    const [apple, peach, banana] = completions;
    expect(appleItem.text()).toBe(apple);
    expect(peachItem.text()).toBe(peach);
    expect(bananaItem.text()).toBe(banana);
  });
});
