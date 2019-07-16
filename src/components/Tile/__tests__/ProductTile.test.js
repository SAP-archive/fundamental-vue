import { mount } from "@vue/test-utils";
import ProductTile from "../ProductTile.vue";

describe("ProductTile", () => {
  const url = "https://techne.yaas.io/images/product-thumbnail-wide.png";
  const title = "Default Product Tile";

  const wrapper = mount(ProductTile, {
    propsData: {
      url,
      title
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct props", () => {
    expect(wrapper.find(".fd-product-tile__title").text()).toEqual(title);
    expect(wrapper.find(".fd-product-tile__media").attributes("style")).toContain(
      `background-image: url(${url});`
    );
  });

  describe("As Button", () => {
    const wrapper = mount(ProductTile, {
      propsData: {
        url,
        title,
        isButton: true
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has role button", () => {
      expect(wrapper.attributes("role")).toEqual("button");
    });
  });
});
