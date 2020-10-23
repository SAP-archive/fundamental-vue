<template>
  <FdPortal :selector="portalSelector">
    <FdModalOverlay :visible="overlayVisible" @after-enter="visible = overlayVisible">
      <transition name="fdv-modal" @after-leave="overlayVisible = visible">
        <FdDialogContent
          :dialogName="name"
          :key="name"
          ref="modalEl"
          v-show="visible"
          :data-fd-dialog-identifier="name"
          :aria-hidden="String(!visible)"
          :tabindex="modalTabIndex"
          :style="modalStyle"
          @keydown.esc="handleEsc"
          v-bind="$attrs"
        >
          <slot v-bind="this" />
        </FdDialogContent>
      </transition>
    </FdModalOverlay>
  </FdPortal>
</template>

<script>
import shortUuid from './../../lib/uuid'
import FocusTrap from './../../mixins/focus-trap'
import { Portal } from '@linusborg/vue-simple-portal'
import FdModalOverlay from './../modal-overlay/modal-overlay.vue'
import FdButton from './../button'
import FdDialogContent from './content.vue'

export default {
  name: 'FdDialog',
  mixins: [FocusTrap],
  inheritAttrs: false,
  components: { FdDialogContent, FdModalOverlay, FdPortal: Portal },
  props: {
    handleEscManually: {
      type: Boolean,
      default: false
    },
    modalStyle: {
      default: () => ({
        // 'max-width': '460px'
      })
    },
    title: { type: String, default: null },
    name: {
      type: String,
      default: () => `fd-dialog-${shortUuid()}`
    }
  },
  computed: {
    portalSelector() {
      return `[data-fd-vue-dialog-portal="${this.name}"]`
    },
    modalTabIndex() {
      return this.visible ? -1 : 0
    }
  },
  data() {
    return {
      visible: false,
      overlayVisible: false
    }
  },
  methods: {
    handleEsc() {
      if (this.handleEscManually) {
        this.$emit('esc')
        return
      }
      this.close()
    },
    modalEl() {
      return this.$refs.modalEl.$el
    },
    $_open() {
      this.overlayVisible = true
    },
    $_close() {
      this.visible = false
    },
    // Used by the App developer.
    open() {
      this.$fdDialog.open(this)
    },
    close() {
      this.$emit('close')
      this.$fdDialog.close(this)
    }
  },
  created() {
    this.$fdDialog.registerModalVM(this)
  },
  beforeDestroy() {
    this.$fdDialog.unregisterModalVM(this)
  }
}
</script>
