<template>
  <FdPortal :selector="portalSelector">
    <FdModalOverlay :visible="overlayVisible" @after-enter="visible = overlayVisible">
      <transition name="fdv-modal" @after-leave="overlayVisible = visible">
        <div
          :key="name"
          ref="modalEl"
          class="fd-modal fd-modal--overrides"
          v-show="visible"
          :data-fd-modal-identifier="name"
          :aria-hidden="String(!visible)"
          :tabindex="modalTabIndex"
          :style="modalStyle"
          @keydown.esc="handleEsc"
          v-bind="$attrs"
        >
          <div class="fd-modal__content fd-modal__content--overrides" role="document">
            <div class="fd-modal__header">
              <!-- Custom Title Content -->
              <slot name="title" v-bind="this">
                <h3 class="fd-modal__title">{{ title }}</h3>
              </slot>
              <slot name="close" v-bind="this">
                <FdButton
                  class="fd-modal__close"
                  styling="light"
                  icon="decline"
                  @click="close"
                  aria-label="close"
                />
              </slot>
            </div>

            <!-- BODY -->
            <div class="fd-modal__body fd-modal__body--overrides">
              <slot v-bind="this" />
            </div>

            <!-- FOOTER -->
            <footer
              class="fd-modal__footer"
              v-if="$scopedSlots.footer != null || $scopedSlots.actions != null"
            >
              <slot name="footer" v-bind="this" />
              <slot name="actions" v-bind="this" />
            </footer>
          </div>
        </div>
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

export default {
  name: 'FdModal',
  mixins: [FocusTrap],
  inheritAttrs: false,
  components: { FdModalOverlay, FdButton, FdPortal: Portal },
  props: {
    handleEscManually: {
      type: Boolean,
      default: false
    },
    modalStyle: {
      default: () => ({
        'max-width': '460px'
      })
    },
    title: { type: String, default: null },
    name: {
      type: String,
      default: () => `fd-modal-${shortUuid()}`
    }
  },
  computed: {
    portalSelector() {
      return `[data-fd-vue-modal-portal="${this.name}"]`
    },
    modalTabIndex() {
      return this.visible ? -1 : 0
    }
  },
  data: () => ({
    visible: false,
    overlayVisible: false
  }),
  methods: {
    handleEsc() {
      if (this.handleEscManually) {
        this.$emit('esc')
        return
      }
      this.close()
    },
    modalEl() {
      return this.$refs.modalEl
    },
    $_open() {
      this.overlayVisible = true
    },
    $_close() {
      this.visible = false
    },
    // Used by the App developer.
    open() {
      this.$fdModal.open(this)
    },
    close() {
      this.$emit('close')
      this.$fdModal.close(this)
    }
  },
  created() {
    this.$fdModal.registerModalVM(this)
  },
  beforeDestroy() {
    this.$fdModal.unregisterModalVM(this)
  }
}
</script>

<style lang="scss">
// @import "./modal";
</style>
