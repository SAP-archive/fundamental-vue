import { mount } from "@vue/test-utils";
import Token from "../Token.vue";

describe("Token", () => {
  const onClick = jest.fn();
  const text = "Token";
  const wrapper = mount(Token, {
    listeners: {
      click: onClick
    },
    slots: {
      default: text
    }
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders default slot when passed", () => {
    expect(wrapper.text()).toEqual(text);
  });

  it("calls onClick when token is clicked", () => {
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalled();
  });
});
