import Vue from 'vue'
import VueRouter from 'vue-router'
import FundamentalVue from './../src'
import 'fundamental-styles/dist/fundamental-styles.css'
import { configure, addParameters } from '@storybook/vue';

Vue.use(VueRouter)
Vue.use(FundamentalVue)

configure(require.context('../stories', true, /\.*.stories.js/), module)
