<template>
  <div class="fdv-notification-container" :id="$options.containerId">
    <slot />
    <div v-for="notification in notifications" :key="notification.id">
      <component :active="active" :is="notification.component" />
    </div>
  </div>
</template>

<script>
import FdNotification from './../notification/notification.vue'
import FdNotificationHeader from './../notification/components/header.vue'
import FdNotificationTitle from './../notification/components/title.vue'
import FdNotificationCloseButton from './../notification/components/close-button.vue'

export default {
  name: 'FdNotificationContainer',
  components: {
    FdNotification,
    FdNotificationHeader,
    FdNotificationTitle,
    FdNotificationCloseButton
  },
  methods: {
    deactivateAll() {
      this.active = false
    },
    addNotification(notification) {
      this.notifications = [...this.notifications, notification]
      // notification.component.visible = true
    }
  },
  data() {
    return {
      active: true,
      // A notification has the following shape:
      /**
       * interface Notification {
       *   id: string
       *   component: Vue Component
       * }
       */
      notifications: []
    }
  }
}
</script>

<style>
/* stolen from fundamental ngx – thanks - love ya! */
.fdv-notification-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 5000;
  align-items: center;
  top: 1rem;
  right: 1rem;
}
</style>
