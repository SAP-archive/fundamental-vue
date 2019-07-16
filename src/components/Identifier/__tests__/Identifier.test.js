import { mount } from "@vue/test-utils";
import { Identifier } from "@/components/Identifier";

describe("Identifier", () => {
  it("renders background image", () => {
    const url = "https://example.com/img.png";
    const identifier = mount(Identifier, {
      propsData: {
        url,
        thumbnail: true
      }
    });
    expect(identifier.element.style.backgroundImage).toEqual(`url(${url})`);
  });
  it("renders default slot", () => {
    const text = "hi sap";
    const identifier = mount(Identifier, {
      slots: {
        default: text
      }
    });
    expect(identifier.text()).toEqual(text);
  });
  describe("without icon", () => {
    it("has no role attribute", () => {
      const identifier = mount(Identifier);
      expect(identifier.attributes()).not.toHaveProperty("role");
    });
  });
  describe("with icon", () => {
    const icon = "money-bills";
    const identifier = mount(Identifier, {
      propsData: { icon }
    });
    it("has correct role attribute", () => {
      expect(identifier.attributes("role")).toEqual("presentation");
    });
    it("renders background color", () => {
      identifier.setProps({
        backgroundColor: "accent-1"
      });
      expect(identifier.classes()).toContain("fd-has-background-color-accent-1");
    });
    describe("renders each possible size correctly ", () => {
      const sizes = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
      sizes.forEach(size => {
        it(`size: ${size}`, () => {
          identifier.setProps({
            icon,
            size
          });
          const classes = identifier.classes();
          expect(classes).toContain(`sap-icon--${icon}`);
          expect(classes).toContain(`fd-identifier--${size}`);
        });
      });
    });
  });
});
