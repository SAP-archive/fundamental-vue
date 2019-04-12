import { mount } from "@vue/test-utils";
import FdSearchInput from "./../SearchInput.vue";
import FdMenuItem from "./../../Menu/MenuItem.vue";

describe("Search Input", () => {
  // There was an issue where the search input component emitted objects/event objects instead of just strings.
  it("does not emit an object", () => {
    const searchInput = mount(FdSearchInput);
    const input = searchInput.find("input");

    input.element.value = "hi";
    input.trigger("input");
    const searchEvents = searchInput.emitted("update");
    expect(searchEvents).toHaveLength(1);
    const [searchEvent] = searchEvents;
    expect(searchEvent).toEqual(["hi"]);
  });

  it("renders Peach for predicate 'p'", () => {
    const completions = ["Bambus", "Apple", "Peach", "Banana"];

    const searchInput = mount(FdSearchInput, {
      propsData: { predicate: "p", completions }
    });
    const menuItems = searchInput.findAll(FdMenuItem);
    expect(menuItems).toHaveLength(1);
    const peachItem = menuItems.at(0);
    expect(peachItem.text()).toBe("Peach");
  });

  it("renders Banana and Bambus for predicate 'ba'", () => {
    const completions = ["Bambus", "Apple", "Peach", "Banana"];

    const searchInput = mount(FdSearchInput, {
      propsData: { predicate: "ba", completions }
    });
    const menuItems = searchInput.findAll(FdMenuItem);
    expect(menuItems).toHaveLength(2);
    const bambusItem = menuItems.at(0);
    expect(bambusItem.text()).toBe("Bambus");
    const bananaItem = menuItems.at(1);
    expect(bananaItem.text()).toBe("Banana");
  });
});
