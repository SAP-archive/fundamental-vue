import FundamentalVue from "./../../../src/index";
import pageComponents from '@internal/page-components'
import * as Prism from 'prismjs';
import VueVirtualScroller from "vue-virtual-scroller";
import VueObserveVisibility from "vue-observe-visibility";
import DTip from "./global-components/d-tip.vue";
import "fundamental-styles/dist/fundamental-styles-ie11.min.css";

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.config.productionTip = true;
  Vue.component("Tip", DTip);
  Vue.use(VueObserveVisibility)
  Vue.use(VueVirtualScroller)
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
  Vue.use(FundamentalVue)
}