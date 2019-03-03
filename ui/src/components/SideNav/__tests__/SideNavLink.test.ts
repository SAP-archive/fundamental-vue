import {
  RouterLinkStub,
  shallowMount,
  createLocalVue,
  mount
} from "@vue/test-utils";
import FundamentalVue from "@/index";
import FdSideNavList from "./../SideNavList.vue";
import FdSideNav from "./../SideNavList.vue";
import FdSideNavLink from "./../SideNavLink.vue";
import { Store } from "./../Model/Store";

describe("SideNavLink", () => {
  it("renders router link in route mode", async () => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);
    const sideNavStore = new Store({
      selectedId: "1",
      items: {
        "1": null
      },
      expandedIds: []
    });
    const sideNavItem = { uid: "1" };
    const config = { mode: "router" };
    const wrapper = mount(FdSideNavLink, {
      localVue,
      stubs: {
        "router-link": RouterLinkStub
      },
      slots: {
        default: "hi mom"
      },
      provide: {
        sideNavStore,
        sideNavItem,
        config
      }
    });
    await localVue.nextTick();
    const link = wrapper.find(RouterLinkStub);
    expect(link.exists()).toBe(true);
    expect(link.text()).toBe("hi mom");
    // @ts-ignore
    expect(wrapper.vm.selected).toBe(true);
  });
});
