import { shallowMount } from "@vue/test-utils";
import Icon from "../Icon.vue";
import { assert } from "chai";


describe("Icon Test Scripts", () => {
    const name = "cart";
    const size = "s";
    const icon = shallowMount(Icon, {
        propsData: {
            name,
            size
        }
    });
    test("Render cart icon based on the icon name", () => {
        assert(icon.classes(`sap-icon--${name}`));
    });

    test("Render icon based on the size mentioned", () => {
        assert(icon.classes(`sap-icon--${size}`));
    });
});