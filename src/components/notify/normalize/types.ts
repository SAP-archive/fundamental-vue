import Vue from 'vue'

export interface Component {
  component: string | Vue.Component
}

export type Notification = string | Component

export interface NormalizedNotification {
  id: string
  component: Vue.Component
}
