import { exampleCollections } from './..';
import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import { assert } from 'chai';
import FundamentalVue from '@/.';
import Vue from 'vue';

type VueWarning = {
  msg: string; vm: Vue; trace: string;
};
type VueError = {
  err: Error; vm: Vue; info: string;
};

describe('All Examples', () => {
  exampleCollections.map(collection => {
    describe(`Examples for ${collection.title}`, () => {
      collection.examples().map(example => {
        describe(`Example ${example.title}`, () => {
          let vueWarning: VueWarning | null = null;
          let vueError: VueError | null = null;
          beforeEach(() => {
            vueWarning = null;
            vueError = null;
            Vue.config.warnHandler = (msg, vm, trace) => vueWarning = { msg, vm, trace };
            Vue.config.errorHandler = (err, vm, info) => vueError = { err, vm, info };

          });
          afterEach(() => {
            if(vueError != null) {
              const err = `
              ☢️️  'mount(${example.id})' produced an error.
              Failing example: ${example.title}
              Error:
                msg: ${vueError.err.message}
                vm: ${vueError.vm}
                info: ${vueError.info}
              `;
              throw Error(err);
            }
            if(vueWarning != null) {
              const err = `
              ⚠️  'mount(${example.id})' produced a warning.
              Failing example: ${example.title}
              Warning:
                msg: ${vueWarning.msg}
                vm: ${vueWarning.vm}
                trace: ${vueWarning.trace}
              `;
              throw Error(err);
            }
          });
          it('can be mounted', () => {
            const localVue = createLocalVue();
            localVue.config.productionTip = false;
            localVue.use(FundamentalVue, { log: { registerComponent: false, welcome: false } });
            assert.doesNotThrow(() => {
              const wrapper = mount(example.component, { localVue, stubs: {RouterLink: RouterLinkStub} });
              assert.isDefined(wrapper);
            });
          });
        });
      });
    });
  });
});
