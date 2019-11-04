<template>
  <FdRawNotification v-if="portalSelector == null" v-bind="$attrs">
    <slot />
  </FdRawNotification>
  <FdPortal v-else :selector="portalSelector">
    <FdRawNotification>
      <slot />
    </FdRawNotification>
  </FdPortal>
</template>

<script>
import FdRawNotification from './_notification.vue'
import { Portal as FdPortal } from '@linusborg/vue-simple-portal'

export default {
  name: 'FdNotification',
  components: { FdRawNotification, FdPortal },
  props: {
    portalSelector: {
      type: String,
      default: null
    }
    // size: {
    //   type: String,
    //   default: 'l',
    //   validator: validateSize
    // },
    // type: {
    //   type: String,
    //   default: null,
    //   validator: validateType
    // },
    // active: {
    //   type: Boolean,
    //   default: true
    // }
  }
}
</script>
