import { createLocalVue } from "@vue/test-utils";
import FundamentalVue from "./..";

describe("Fundamental Vue", () => {
  it("can be installed", () => {
    const localVue = createLocalVue();
    expect(localVue.component("FdButton")).toBeUndefined();
    localVue.use(FundamentalVue, {
      log: {
        registerComponent: false,
        welcome: false
      }
    });
    expect(localVue.component("FdButton")).toBeDefined();
  });
});
