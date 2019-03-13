import { VNode, CreateElement } from "vue";
import { shallowMount } from "@vue/test-utils";
import Tile from "../Tile.vue";
import Identifier from "@/components/Identifier";

describe("Tile", () => {
  const title = "Title";
  const description = "Description";

  const wrapper = shallowMount(Tile, {
    propsData: {
      title,
      description
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders correct props", () => {
    expect(wrapper.find(".fd-tile__title").text()).toEqual(title);
    expect(wrapper.find(".fd-tile__content p").text()).toEqual(description);
  });

  describe("With Background Color", () => {
    const backgroundColor = "accent-2";
    const wrapper = shallowMount(Tile, {
      propsData: {
        title,
        description,
        backgroundColor
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders correct background color", () => {
      expect(
        wrapper.classes(`fd-has-background-color-${backgroundColor}`)
      ).toBe(true);
    });
  });

  describe("As Button", () => {
    const wrapper = shallowMount(Tile, {
      propsData: {
        title,
        description,
        isButton: true
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has role as a button", () => {
      expect(wrapper.attributes("role")).toEqual("button");
    });
  });

  describe("Disabled", () => {
    const wrapper = shallowMount(Tile, {
      propsData: {
        title,
        description,
        disabled: true
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("is disabled", () => {
      expect(wrapper.attributes("aria-disabled")).toEqual("true");
    });
  });

  describe("With Slot Media", () => {
    const wrapper = shallowMount(Tile, {
      propsData: {
        title,
        description
      },
      slots: {
        media: {
          render(h: CreateElement): VNode {
            return h(Identifier);
          }
        }
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has media slot", () => {
      expect(wrapper.contains(".fd-tile__media")).toBe(true);
    });
  });

  describe("Row Col Span", () => {
    const rowSpan = 3;
    const colSpan = 5;

    const wrapper = shallowMount(Tile, {
      propsData: {
        title,
        description,
        rowSpan,
        colSpan
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders correct row & col span", () => {
      expect(wrapper.contains(`.fd-has-grid-row-span-${rowSpan}`)).toBe(true);
      expect(wrapper.contains(`.fd-has-grid-column-span-${colSpan}`)).toBe(
        true
      );
    });
  });
});
