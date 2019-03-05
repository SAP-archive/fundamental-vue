import { mount } from "@vue/test-utils";
import Breadcrumb from "../Breadcrumb.vue";
import BreadcrumbItem from "../../BreadcrumbItem/BreadcrumbItem.vue";
import { VNode, CreateElement } from "vue";

describe("Breadcrumb", () => {
  it("renders correctly", () => {
    const wrapper = mount(Breadcrumb, {
      slots: {
        default: {
          render(h: CreateElement): VNode {
            return h(
              BreadcrumbItem,
              {
                attrs: {
                  href: "#item1"
                }
              },
              "Item 1"
            );
          }
        }
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
