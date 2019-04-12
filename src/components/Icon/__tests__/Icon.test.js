import { mount } from "@vue/test-utils";
import Icon from "../Icon.vue";

describe("Icon Test Scripts", () => {
  const name = "cart";
  const size = "s";
  const icon = mount(Icon, {
    propsData: {
      name,
      size
    }
  });

  test("Renders correctly", () => {
    expect(icon.element).toMatchSnapshot();
  });

  test("Render cart icon based on the icon name", () => {
    expect(icon.classes(`sap-icon--${name}`)).toBe(true);
  });

  test("Render icon based on the size mentioned", () => {
    expect(icon.classes(`sap-icon--${size}`)).toBe(true);
  });
});
