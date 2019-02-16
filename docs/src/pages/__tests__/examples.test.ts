import DocumentationLoader, { Example } from "./../../DocumentationLoader";
import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import { assert } from "chai";
import Vue from "vue";
// @ts-ignore

type VueWarning = {
  msg: string;
  vm: Vue;
  trace: string;
};
type VueError = {
  err: Error;
  vm: Vue;
  info: string;
};

const messageForWarningDuringMount = (
  { id, title }: Example,
  { msg, vm, trace }: VueWarning
) => `
⚠️  'mount(${id})' produced a warning.
Failing example: ${title}
Warning:
  msg: ${msg}
  vm: ${vm}
  data: ${vm.$data}
  trace: ${trace}
`;

const messageForErrorDuringMount = (
  { id, title }: Example,
  { err, vm, info }: VueError
) => `
☢️️  'mount(${id})' produced an error.
Failing example: ${title}
Error:
  msg: ${err.message}
  vm: ${vm}
  info: ${info}
`;

describe("All Examples", () => {
  const loader = new DocumentationLoader();
  const { pages } = loader;

  pages.map(page => {
    describe(`Examples for ${page.title}`, () => {
      const examples = loader.examplesForPage(page);
      examples.map(example => {
        describe(`Example ${example.title}`, () => {
          let vueWarning: VueWarning | null = null;
          let vueError: VueError | null = null;
          let localVue = createLocalVue();
          beforeEach(() => {
            vueWarning = null;
            vueError = null;
            localVue = createLocalVue();
            localVue.config.warnHandler = (msg, vm, trace) =>
              (vueWarning = { msg, vm, trace });
            localVue.config.errorHandler = (err, vm, info) =>
              (vueError = { err, vm, info });
            localVue.config.productionTip = false;
            // @ts-ignore
            const FundamentalVue = window.FundamentalVue;
           localVue.use(FundamentalVue, {
              log: { registerComponent: false, welcome: false }
            });
          });
          it("can be mounted", async () => {
            const messages: string[] = [];
            let html = "";
            // We are not using chai's doesNotThrow-assertion because we want to have the wrapper to get the html
            try {
              // sync: false because of https://github.com/vuejs/vue-test-utils/issues/673
              const wrapper = mount(example.component, {
                sync: false,
                localVue,
                stubs: { RouterLink: RouterLinkStub }
              });
              await localVue.nextTick();
              assert.isDefined(wrapper);
              if (vueError != null) {
                messages.push(messageForErrorDuringMount(example, vueError));
              }
              if (vueWarning != null) {
                messages.push(
                  messageForWarningDuringMount(example, vueWarning)
                );
              }
              html = wrapper.html();
            } catch (error) {
              messages.push(
                `Caught error during mount of example ${
                  example.title
                }: ${error}`
              );
            }
            if (messages.length > 0) {
              throw Error(`${messages.join("\n")}\nHTML:\n\n${html}\n`);
            }
          });
        });
      });
    });
  });
});
