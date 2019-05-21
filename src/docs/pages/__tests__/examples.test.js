import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import FundamentalVue from "./../../../";
import fs from "fs";
import Path from "path";

const messageForWarningDuringMount = ({ id, title }, { msg, vm, trace }) => `
⚠️  'mount(${id})' produced a warning.
Failing example: ${title}
Warning:
  msg: ${msg}
  vm: ${vm}
  data: ${vm.$data}
  trace: ${trace}
`;

const messageForErrorDuringMount = ({ id, title }, { err, vm, info }) => `
☢️️  'mount(${id})' produced an error.
Failing example: ${title}
Error:
  msg: ${err.message}
  vm: ${vm}
  info: ${info}
`;

const getExamples = pageDirectory => {
  const files = fs.readdirSync(pageDirectory, { withFileTypes: true });
  return files
    .filter(file => file.name.endsWith(".vue"))
    .map(file => file.name.split(".")[0]);
};

const getPages = () => {
  const pagesPath = Path.resolve(__dirname, "..");
  const dirs = fs.readdirSync(pagesPath, { withFileTypes: true });
  const pages = [];
  for (const dirEntry of dirs) {
    if (dirEntry.isDirectory() == false) {
      continue;
    }
    if (dirEntry.name === "__tests__") {
      continue;
    }
    const pagePath = Path.resolve(pagesPath, dirEntry.name);
    pages.push({
      path: pagePath,
      name: dirEntry.name,
      examples: getExamples(pagePath)
    });
  }
  return pages;
};

describe("All Examples", () => {
  const pages = getPages();
  pages.map(page => {
    describe(page.name, () => {
      const examples = [page.examples[0]];
      examples.forEach(example => {
        const testName = `mounts ${example}`;
        it(testName, async () => {
          let vueWarning;
          let vueError;
          const localVue = createLocalVue();
          localVue.prototype.$withBase = relativePath =>
            `${process.env.BASE_URL}${relativePath}`;

          localVue.config.warnHandler = (msg, vm, trace) =>
            (vueWarning = { msg, vm, trace });
          localVue.config.errorHandler = (err, vm, info) =>
            (vueError = { err, vm, info });
          localVue.config.productionTip = false;
          localVue.use(FundamentalVue, {
            log: { registerComponent: false, welcome: false }
          });
          const messages = [];
          let html = "";
          // We are not using chai's doesNotThrow-assertion because we want to have the wrapper to get the html
          try {
            const componentModule = await import(`./../${
              page.name
            }/${example}.vue`);
            const component =
              componentModule.default != null
                ? componentModule.default
                : componentModule;
            const wrapper = mount(component, {
              sync: false,
              localVue,
              stubs: { RouterLink: RouterLinkStub }
            });
            await localVue.nextTick();
            expect(wrapper.isVisible()).toBe(true);
            expect(wrapper.isVueInstance()).toBe(true);

            if (vueError != null) {
              messages.push(messageForErrorDuringMount(example, vueError));
            }
            if (vueWarning != null) {
              messages.push(messageForWarningDuringMount(example, vueWarning));
            }
            html = wrapper.html();
          } catch (error) {
            messages.push(
              `Caught error during mount of example ${example.title}: ${error}`
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
