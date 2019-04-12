import { mount, createLocalVue } from "@vue/test-utils";
import Modal from "../Modal.vue";
import { FocusTrap } from "@/mixins";
import createFocusTrap from "focus-trap";
import FundamentalVue from "./../../../";

jest.mock("focus-trap");

describe("Modal", () => {
  describe("used via its API", () => {
    it("can be opened and closed", () => {
      const localVue = createLocalVue();
      localVue.use(FundamentalVue);
      const wrapper = mount(Modal, { localVue, attachToDocument: true });
      expect(wrapper.find(".fd-modal__body").isVisible()).toBe(false);
      wrapper.vm.open();
      expect(wrapper.find(".fd-modal__body").isVisible()).toBe(true);
      wrapper.vm.close();
      expect(wrapper.find(".fd-modal__body").isVisible()).toBe(false);
      wrapper.destroy();
    });
  });

  it("renders correctly", () => {
    const wrapper = mount(Modal, { mixins: [FocusTrap] });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should update tabindex when opened", async () => {
    const wrapper = mount(Modal, {
      mixins: [FocusTrap]
    });
    wrapper.vm.open();
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".fd-modal").attributes("tabindex")).toBe("-1");
  });

  it("should update tabindex when closed", async () => {
    const wrapper = mount(Modal, {
      mixins: [FocusTrap]
    });
    wrapper.vm.close();
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".fd-modal").attributes("tabindex")).toBe("0");
  });

  it("should initialize focus trap while mounting", () => {
    const initializeFocusTrapMock = jest.fn();

    const wrapper = mount(Modal, {
      mixins: [FocusTrap],
      methods: {
        initializeFocusTrap: initializeFocusTrapMock
      }
    });

    expect(initializeFocusTrapMock).toHaveBeenCalledWith(wrapper.element, {
      initialFocus: ".fd-modal"
    });
  });

  describe("methods", () => {
    describe("initializeFocusTrap", () => {
      it("should create trap on given HTML element", () => {
        const mockElement = document.createElement("div");
        const wrapper = mount(Modal, {
          mixins: [FocusTrap]
        });

        wrapper.vm.initializeFocusTrap(mockElement, {});

        expect(createFocusTrap).toHaveBeenCalledWith(mockElement, {});
      });
    });

    describe("activateFocusTrap", () => {
      it("should activate focus trap", () => {
        const focusTrapMock = {
          activate: jest.fn(),
          deactivate: jest.fn()
        };
        createFocusTrap.mockReturnValue(focusTrapMock);
        const wrapper = mount(Modal, {
          mixins: [FocusTrap]
        });

        wrapper.vm.activateFocusTrap();

        expect(focusTrapMock.activate).toHaveBeenCalled();
      });
    });

    describe("deactivateFocusTrap", () => {
      it("should deactivate focus trap", () => {
        const focusTrapMock = {
          activate: jest.fn(),
          deactivate: jest.fn()
        };
        createFocusTrap.mockReturnValue(focusTrapMock);
        const wrapper = mount(Modal, {
          mixins: [FocusTrap]
        });

        wrapper.vm.activateFocusTrap();

        expect(focusTrapMock.activate).toHaveBeenCalled();
      });
    });
  });
});
