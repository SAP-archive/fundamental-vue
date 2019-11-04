import Vue from 'vue'
import router from './router'
import 'fundamental-styles/dist/fundamental-styles.css'
import FullscreenLayout from './layouts/FullscreenLayout.vue'
import FundamentalVue from './../../../src'
import VirtualScroller from 'vue-virtual-scroller'
import VueObserveVisibility from 'vue-observe-visibility'
import VueRouter from 'vue-router'
Vue.use(VueObserveVisibility)
Vue.use(VirtualScroller)
Vue.use(VueRouter)
Vue.use(FundamentalVue, {
  log: {
    welcome: true,
    registerComponent: true
  }
})

new Vue({
  router,
  el: '#app',
  render: h => h(FullscreenLayout)
})
