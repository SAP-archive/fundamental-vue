import { mount } from "@vue/test-utils";
import Image from "../Image.vue";

describe("Image", () => {
  it("renders correctly", () => {
    const wrapper = mount(Image, {
      propsData: {
        url: "https://vuejs.org/images/logo.png",
        size: "l",
        circle: true
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct sizes", () => {
    const imageL = mount(Image, {
      propsData: {
        size: "l"
      }
    });
    const imageM = mount(Image, {
      propsData: {
        size: "m"
      }
    });
    const imageS = mount(Image, {
      propsData: {
        size: "s"
      }
    });

    expect(imageL.element).toMatchSnapshot();
    expect(imageM.element).toMatchSnapshot();
    expect(imageS.element).toMatchSnapshot();

    expect(imageL.classes("fd-image--l")).toBe(true);
    expect(imageM.classes("fd-image--m")).toBe(true);
    expect(imageS.classes("fd-image--s")).toBe(true);
  });
});
