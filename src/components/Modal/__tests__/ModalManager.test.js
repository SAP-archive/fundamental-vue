import ModalManager from "./../ModalManager";

describe("Modal Manager", () => {
  let mm;

  beforeEach(() => {
    mm = new ModalManager();
  });

  it("can register modals", () => {
    const modal = { name: "chris" };
    mm.registerModalVM(modal);
    expect(mm.modalsByName.chris).toHaveProperty("vm");
    const modalOut = mm.modalsByName["chris"];
    expect(modalOut.vm).toMatchObject(modal);
  });

  it("can unregister modals", () => {
    const modal = { name: "chris" };
    mm.registerModalVM(modal);
    mm.unregisterModalVM(modal);
    expect(mm.modalsByName).not.toHaveProperty("chris");
  });
});
