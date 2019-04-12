import { mount } from "@vue/test-utils";
import FdMenuLink from "./../MenuLink.vue";

describe("MenuLink", () => {
  it("renders correctly", () => {
    expect(
      mount({
        template: `<FdMenuLink>Item 1</FdMenuLink>`,
        components: { FdMenuLink }
      }).element
    ).toMatchSnapshot();
  });
});
