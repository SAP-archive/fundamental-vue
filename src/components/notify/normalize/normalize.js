// @ts-check
import createId from './../../../lib/uuid'
import {
  Notification,
  NotificationCloseButton,
  NotificationHeader,
  NotificationTitle
} from './../../notification'

import Vue from 'vue'

const wrapNotification = (notificationComponent, title) => {
  return {
    // watch: {
    //   active: {
    //     immediate: true,
    //     handler(active) {
    //       this.active_ = active
    //     }
    //   }
    // },
    data() {
      return {
        active_: true
      }
    },
    render(h) {
      const closeOn = {
        click: () => {
          this.active_ = false
        }
      }
      return h(
        notificationComponent,
        {
          props: {
            active: this.active_
          }
        },
        [
          h(NotificationHeader, {}, [
            h(NotificationTitle, {}, [title]),
            h(NotificationCloseButton, { on: closeOn })
          ])
        ]
      )
    }
  }
}

const createNotificationComponentWithTitle = title => {
  return wrapNotification(Notification, title)
}

/** @param {import('./types').Notification} notification */
const createNotificationComponent = notification => {
  let component
  if (typeof notification === 'string') {
    component = createNotificationComponentWithTitle(notification)
  } else {
    component = notification
  }
  return component
}

/**
 * @param {NotificationConfig} notification
 */
export default notification => {
  if (notification == null) {
    throw Error(`failed to normalize notification. notification cannot be null/undefined`)
  }
  if (typeof notification === 'string') {
    const id = createId()
    const component = createNotificationComponent(notification)
    return { id, component }
  }
  return notification
}
