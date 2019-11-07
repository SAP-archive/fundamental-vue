import Vue from 'vue'
import '../fundamental.scss'
<%_ if (fullVirtualizedListSupport) { _%>
<%- `import 'intersection-observer'` %>
<%_ } _%>
import FundamentalVue from 'fundamental-vue'
<%_ if (partialVirtualizedListSupport) { _%>
<%- `import VueObserveVisibility from 'vue-observe-visibility'` %>
<%- `import VueVirtualScroller from 'vue-virtual-scroller'` %>

<%- 'Vue.use(VueObserveVisibility)' %>
<%- 'Vue.use(VueVirtualScroller)' %>
<%_ } _%>
Vue.use(FundamentalVue)
