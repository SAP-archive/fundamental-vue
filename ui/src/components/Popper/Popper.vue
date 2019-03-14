<template>
  <div>
    <div ref="trigger" style="display: inline-block">
      <slot name="trigger" v-bind="slotProps" />
    </div>
    <div ref="content" :style="contentStyles">
      <slot v-bind="slotProps" />
    </div>
    <ClickAwayContainer
      :ignoredElements="ignoredElements"
      :active="visible"
      :aria-hidden="!visible"
      @clickOutside="hide"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropValidator } from "vue/types/options";
import Popper from "popper.js";
import ClickAwayContainer from "@/components/ClickAwayContainer";

const placementMapping = {
  "auto-start": "auto-start",
  auto: "auto",
  "auto-end": "auto-end",
  "top-start": "top-start",
  top: "top",
  "top-end": "top-end",
  "right-start": "right-start",
  right: "right",
  "right-end": "right-end",
  "bottom-end": "bottom-end",
  bottom: "bottom",
  "bottom-start": "bottom-start",
  "left-end": "left-end",
  left: "left",
  "left-start": "left-start"
};

type Placement = keyof typeof placementMapping;
const PlacementIsValid = (value: string) => {
  return Object.keys(placementMapping).includes(value);
};

export default Vue.extend({
  name: "FdPopper",
  components: { ClickAwayContainer },
  props: {
    placement: {
      type: String,
      default: "bottom",
      validator: PlacementIsValid
    } as PropValidator<Placement>
  },
  data() {
    return {
      $popper: null as Popper | null,
      visible: false as boolean,
      triggerElement: null as Element | null,
      contentElement: null as Element | null
    };
  },
  computed: {
    slotProps(): any {
      const { show, hide, toggle, visible } = this;
      return { show, hide, toggle, visible };
    },
    contentStyles(): { [key: string]: string } {
      return this.visible ? {} : { display: "none" };
    },
    ignoredElements(): () => Element[] {
      const ignoredElements: Element[] = [];
      if (this.triggerElement != null) {
        ignoredElements.push(this.triggerElement);
      }
      if (this.contentElement != null) {
        ignoredElements.push(this.contentElement);
      }
      return () => ignoredElements;
    },
    popperOptions(): Popper.PopperOptions {
      const opts: Popper.PopperOptions = {
        placement: this.placement
      };
      return opts;
    }
  },
  mounted() {
    const { trigger, content } = this.$refs;
    this.triggerElement = trigger as Element;
    this.contentElement = content as Element;
  },
  methods: {
    show() {
      if (this.triggerElement == null || this.contentElement == null) {
        return;
      }

      const { body } = document;
      body.appendChild(this.contentElement);

      this.visible = true;
      this.$emit("visible", this.visible);

      this.$popper =
        this.$popper ||
        new Popper(
          this.triggerElement,
          this.contentElement,
          this.popperOptions
        );
    },
    hide() {
      this.visible = false;
      this.$emit("visible", this.visible);

      this.bringItBack();

      if (this.$popper) {
        this.$popper.destroy();
        this.$popper = null;
      }
    },
    toggle() {
      this.visible ? this.hide() : this.show();
    },
    bringItBack() {
      if (this.contentElement == null) {
        return;
      }
      this.$el.appendChild(this.contentElement);
    }
  }
});
</script>
