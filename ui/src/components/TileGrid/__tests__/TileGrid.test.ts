import { shallowMount } from "@vue/test-utils";
import TileGrid from "../TileGrid.vue";
import Tile from "@/components/Tile";
import { CreateElement, VNode } from "vue";

describe("TileGrid", () => {
  describe("2 Columns", () => {
    const createTileElement = (h: CreateElement): VNode => {
      return h(Tile, {
        props: {
          description: "Lorem ipsum"
        }
      });
    };

    const wrapper = shallowMount(TileGrid, {
      propsData: {
        col: 2
      },
      slots: {
        default: {
          render(h: CreateElement): VNode {
            return h("div", {}, [
              createTileElement(h),
              createTileElement(h),
              createTileElement(h),
              createTileElement(h),
              createTileElement(h)
            ]);
          }
        }
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("has correct classes", () => {
      expect(wrapper.contains(".fd-tile-grid")).toBe(true);
    });

    it("renders as 2 column", () => {
      expect(wrapper.contains(".fd-tile-grid--2col")).toBe(true);
    });
  });

  describe("6 Columns", () => {
    const createTileElement = (h: CreateElement): VNode => {
      return h(Tile, {
        props: {
          description: "Lorem ipsum"
        }
      });
    };

    const wrapper = shallowMount(TileGrid, {
      propsData: {
        col: 6
      },
      slots: {
        default: {
          render(h: CreateElement): VNode {
            return h("div", {}, [
              createTileElement(h),
              createTileElement(h),
              createTileElement(h),
              createTileElement(h),
              createTileElement(h)
            ]);
          }
        }
      }
    });

    it("renders correctly", () => {
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders as 6 column", () => {
      expect(wrapper.contains(".fd-tile-grid--6col")).toBe(true);
    });
  });
});
