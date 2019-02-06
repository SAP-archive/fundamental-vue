<template>
  <transition name="fade">
    <div
      v-show="isActive"
      class="fd-ui__overlay fd-overlay fd-overlay--modal"
      :aria-hidden="!isActive"
    >
      <ClickAwayContainer
        @clickOutside="clickOutside"
        class="fd-modal"
        :active="isActive"
      >
        <div class="fd-modal__content" role="document">
          <!-- HEADER -->
          <div class="fd-modal__header">
            <h1 class="fd-modal__title">{{title}}</h1>
            <Button class="fd-modal__close" styling="light" @click="close" aria-label="close"/>
          </div>

          <!-- BODY -->
          <div class="fd-modal__body">
            <slot/>
          </div>

          <!-- FOOTER -->
          <footer v-if="$slots.footer != null || $slots.actions != null" class="fd-modal__footer">
            <slot name="footer"/>
            <div v-if="$slots.actions" class="fd-modal__actions">
              <slot name="actions"/>
            </div>
          </footer>
        </div>
      </ClickAwayContainer>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
// Use these types in order to cast your props. Delete if not needed.
// import { PropValidator } from "vue/types/options";
// import { Prop } from "vue/types/options";
import ClickAwayContainer from "@/components/ClickAwayContainer";
import { Button } from "@/components/Button";

export default Vue.extend({
  name: "FdModal",
  mounted() {
    document.body.appendChild(this.$el);
  },
  destroyed() {
    const el = this.$el;
    if (el != null) {
      const parent = el.parentNode;
      if (parent != null) {
        parent.removeChild(el);
      }
    }
  },
  props: {
    active: { type: Boolean, default: false },
    title: { type: String, default: null }
  },
  components: { Button, ClickAwayContainer },
  watch: {
    active: {
      immediate: true,
      handler(newIsActive: boolean) {
        this.isActive = newIsActive;
      }
    }
  },
  methods: {
    clickOutside() {
      if (this.isActive) {
        this.close();
      }
    },
    close() {
      this.$emit("close");
      this.$emit("update:active", false);
    }
  },
  data() {
    return {
      isActive: this.active
    };
  }
});
</script>
