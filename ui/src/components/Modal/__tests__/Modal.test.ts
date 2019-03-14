import Vue from "vue";
import { mount, Wrapper, shallowMount } from "@vue/test-utils";
import Modal from "../Modal.vue";
import { FocusTrap } from "@/mixins";
import createFocusTrap, { Options } from "focus-trap";

jest.mock("focus-trap");
interface ModalWrapper extends Vue {
  clickOutside(): void;
  close(): void;
  activateFocusTrap(): void;
  deactivateFocusTrap(): void;
  initializeFocusTrap(element: Element, options?: Options): void;
}

describe("Modal", () => {
  it("renders correctly", () => {
    const wrapper = mount(Modal, { mixins: [FocusTrap] });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should update tabindex when opened", () => {
    const wrapper = shallowMount(Modal, {
      mixins: [FocusTrap],
      propsData: { active: true }
    });

    expect(wrapper.find(".fd-modal").attributes("tabindex")).toBe("-1");
  });

  it("should update tabindex when closed", () => {
    const wrapper = shallowMount(Modal, {
      mixins: [FocusTrap],
      propsData: { active: false }
    });

    expect(wrapper.find(".fd-modal").attributes("tabindex")).toBe("0");
  });

  it("should initialize focus trap while mounting", () => {
    const initializeFocusTrapMock = jest.fn();

    const wrapper: Wrapper<ModalWrapper> = shallowMount(Modal, {
      mixins: [FocusTrap],
      methods: {
        initializeFocusTrap: initializeFocusTrapMock
      }
    }) as Wrapper<ModalWrapper>;

    expect(initializeFocusTrapMock).toHaveBeenCalledWith(wrapper.element, {
      initialFocus: ".fd-modal",
      onDeactivate: wrapper.vm.close
    });
  });

  describe("methods", () => {
    describe("initializeFocusTrap", () => {
      it("should create trap on given HTML element", () => {
        const mockElement = document.createElement("div");
        const wrapper = shallowMount(Modal, {
          mixins: [FocusTrap]
        }) as Wrapper<ModalWrapper>;

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
        (<jest.Mock>createFocusTrap).mockReturnValue(focusTrapMock);
        const wrapper = shallowMount(Modal, {
          mixins: [FocusTrap]
        }) as Wrapper<ModalWrapper>;

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
        (<jest.Mock>createFocusTrap).mockReturnValue(focusTrapMock);
        const wrapper = shallowMount(Modal, {
          mixins: [FocusTrap]
        }) as Wrapper<ModalWrapper>;

        wrapper.vm.activateFocusTrap();

        expect(focusTrapMock.activate).toHaveBeenCalled();
      });
    });
  });
});
