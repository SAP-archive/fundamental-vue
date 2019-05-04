import { mount } from "@vue/test-utils";
import FdMenuItem from "./../MenuItem.vue";
import FdMenuLink from "./../MenuLink.vue";

const mountMenuItem = template => {
  return mount(
    {
      template,
      components: { FdMenuItem, FdMenuLink }
    },
    {
      provide: {
        menuList: {
          canHaveAddon: false,
          menuItemDidClick() {}
        }
      }
    }
  );
};

describe("MenuItem", () => {
  describe("MenuItem with just text", () => {
    it("renders correctly", () => {
      const wrapper = mountMenuItem(`<FdMenuItem>hello</FdMenuItem>`);
      expect(wrapper.element).toMatchInlineSnapshot(`
<li>
  <!---->
   
  <a
    class="fd-menu__item"
  >
    hello
  </a>
</li>
`);
    });
  });

  it("emits click-event", async () => {
    const wrapper = mountMenuItem(`<FdMenuItem>hello</FdMenuItem>`);
    wrapper.find("a").trigger("click");
    await wrapper.vm.$nextTick();
    const clicks = wrapper.find(FdMenuItem).emitted("click");
    expect(clicks).toHaveLength(1);
  });

  it("does render embeddded link with href", () => {
    const wrapper = mountMenuItem(`
    <FdMenuItem>
      <FdMenuLink href='#'>Item 1</FdMenuLink>
    </FdMenuItem>`);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("does render embedded link", () => {
    const wrapper = mountMenuItem(
      `
      <FdMenuItem>
        <FdMenuLink>Item 1</FdMenuLink>
      </FdMenuItem>`
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it("does render selected state", () => {
    const wrapper = mountMenuItem(
      `
      <FdMenuItem :selected="true">
        <FdMenuLink>Item 1</FdMenuLink>
      </FdMenuItem>`
    );
    expect(wrapper.element).toMatchSnapshot();
  });
});
