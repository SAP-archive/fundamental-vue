import { mount } from "@vue/test-utils";
import Pagination from "../Pagination.vue";

describe("Pagination", () => {
  const propsData = {
    itemsTotal: 101,
    initialPage: 1,
    totalText: "Dalmations",
    displayTotal: true
  };
  const pagination = mount(Pagination, { propsData });
  const vm = pagination.vm;
  const links = pagination.findAll("a");
  const leftArrow = links.at(0);
  const rightArrow = links.at(4);
  const pageOne = links.at(1);
  const lastPage = links.at(3);

  it("have total 5 hyperlinks rendered", () => {
    // 4 pages [1,2,11] + 2 arrows
    expect(links).toHaveLength(5);
  });

  it("the initial state", () => {
    expect(vm.itemsTotal).toBe(101);
    expect(vm.initialPage).toBe(1);
    expect(vm.totalText).toBe("Dalmations");
    expect(vm.displayTotal).toBe(true);
    expect(vm.itemsPerPage).toBe(10);
  });

  it("the left arrow is disabled when initialPage is 1, while the right arrow is enabled", () => {
    expect(leftArrow.attributes("aria-disabled")).toBe("true");
    expect(rightArrow.attributes("aria-disabled")).toBeUndefined();
  });

  it("toggle between page 1 and 2 using arrows", () => {
    // pageOne is at index 1 because there is left arrow at index 0
    const pageTwo = links.at(2);
    expect(pageOne.attributes("aria-selected")).toBe("true");
    expect(pageTwo.attributes("aria-selected")).toBeUndefined();
    rightArrow.trigger("click");
    expect(pageOne.attributes("aria-selected")).toBeUndefined();
    expect(pageTwo.attributes("aria-selected")).toBe("true");
    leftArrow.trigger("click");
    expect(pageOne.attributes("aria-selected")).toBe("true");
    expect(pageTwo.attributes("aria-selected")).toBeUndefined();
  });

  it("move to last page by clicking on it and right arrow is disabled", () => {
    expect(lastPage.attributes("aria-selected")).toBeUndefined();
    lastPage.trigger("click");
    expect(lastPage.attributes("aria-selected")).toBe("true");
    expect(rightArrow.attributes("aria-disabled")).toBe("true");
  });

  it("click right arrow twice and ... appears at the correct place", () => {
    // reset to pageOne
    pageOne.trigger("click");
    rightArrow.trigger("click");
    rightArrow.trigger("click");
    const newLinks = pagination.findAll("a");
    // [1,2,3,4,...,11] + 2 arrows
    expect(newLinks).toHaveLength(7);
  });
});
