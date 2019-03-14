import {shallowMount} from "@vue/test-utils"
import {Spinner} from "../"

describe("Spinner", () => {
    const spinner = shallowMount(Spinner, {
        propsData: {
            ariaLabel: "Label"
        }
    });
    test("renders correctly", () => {
        expect(spinner.element).toMatchSnapshot();
    });
    test("renders correct props", () => {
        expect(spinner.attributes("aria-label")).toEqual("Label")
    })
})