import { mount, createLocalVue } from "@vue/test-utils";
import FundamentalVue from "./../../../";
import FdModal from "./../Modal.vue";

jest.mock("focus-trap");

describe("Modal Directive", () => {
  it("works when used with ref", async () => {
    const localVue = createLocalVue();
    localVue.use(FundamentalVue);

    const wrapper = mount(
      {
        template: `
      <div>
        <FdModal ref="modal">
          <template #default>hi</template>
        </FdModal>
        <FdButton ref="button" v-fd-open-modal:modal>Show</FdButton>
      </div>
      `
      },
      { localVue, attachToDocument: true }
    );
    await localVue.nextTick();
    const button = wrapper.find({ ref: "button" });
    expect(button.isVisible()).toBe(true);
    const modal = wrapper.find(FdModal);
    expect(modal.isVisible()).toBe(false);
    expect(modal.isVueInstance()).toBe(true);
    button.trigger("click");
    await localVue.nextTick();
    expect(modal.isVisible()).toBe(true);
    wrapper.destroy();
  });
});
