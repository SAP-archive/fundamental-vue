<template>
  <div class="fd-popover">
    <FdPopoverControl ref="reference">
      <slot name="reference" :show="show" :hide="hide" :toggle="toggle" />
    </FdPopoverControl>

    <FdPopoverBody
      ref="body"
      v-fd-click-out="hide"
      v-show="visible_"
      :aria-hidden="String(!visible_)"
      :x-placement="placement_"
      :x-out-of-boundaries="outOfBoundariesState"
      :style="popperStyles"
      :class="bodyClasses"
    >
      <slot :show="show" :hide="hide" :toggle="toggle" />
      <FdPopoverArrow :style="arrowStylesWithUnits" ref="arrow" />
    </FdPopoverBody>
  </div>
</template>

<script>
import Popper from "popper.js";
import components from "./components";
import elFromRef from "./helper/el-from-ref";
export const PLACEMENTS = Popper.placements;
import clickOut from "./../../directives/click-out";

const withPx = value => {
  if (value === "") {
    return null;
  }
  if (value == null) {
    return null;
  }
  if (typeof value === "number") {
    return `${value}px`;
  }
  return null;
};

const createInitialStyle = () => ({
  position: "absolute",
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: "none"
});
export default {
  name: "FdPopper",
  components,
  directives: {
    "fd-click-out": clickOut
  },
  props: {
    withArrow: { type: Boolean, default: false },
    visible: { type: Boolean, default: false },
    modifiers: {
      type: Object,
      default: () => {}
    },
    placement: {
      type: String,
      validator: value => PLACEMENTS.indexOf(value) >= 0,
      default: "bottom"
    }
  },
  methods: {
    // Called by Popper.js every time something changes.
    updateState(data) {
      // We should not do that since we don't need everything that is in state.
      const {
        offsets = {},
        hide,
        placement,
        arrowStyles = { top: 0, left: 0 },
        styles = {}
      } = data;

      this.hide_ = hide;
      this.placement_ = placement;
      this.arrowStyles_ = arrowStyles;
      this.popperStyles_ = { ...styles };
      const { popper = {} } = offsets;
      const { position = null } = popper;
      this.offsetPosition_ = position;
    },
    destroyPopperInstance() {
      if (!this.popperInstance) {
        return;
      }
      this.popperInstance.destroy();
      this.popperInstance = null;
    },
    updatePopperInstance() {
      this.destroyPopperInstance();
      const reference = this.elements().reference;
      const body = this.elements().body;
      const options = {
        modifiers: this.modifiers_,
        initialStyle: createInitialStyle(),
        placement: this.placement_
      };
      this.popperInstance = new Popper(reference, body, options);
    },
    scheduleUpdate() {
      if (this.popperInstance) {
        this.popperInstance.scheduleUpdate();
      }
    },
    setVisible(newVisible) {
      this.visible_ = newVisible;
      this.$emit("update:visible", this.visible_);
      this.scheduleUpdate();
    },
    show() {
      this.setVisible(true);
    },
    hide(event) {
      if (event != null) {
        const { target } = event;
        const { reference } = this.elements();
        const targetsReference = reference.contains(target);
        if (targetsReference) {
          return;
        }
      }
      this.setVisible(false);
    },
    toggle() {
      this.setVisible(!this.visible_);
    },
    elements() {
      const { $refs } = this;
      return {
        arrow: elFromRef($refs.arrow),
        body: elFromRef($refs.body),
        reference: elFromRef($refs.reference)
      };
    }
  },
  data() {
    return {
      arrowStyles_: { top: 0, left: 0 },
      withArrow_: this.withArrow,
      visible_: this.visible,
      placement_: this.placement,
      hide_: this.visible,
      popperStyles_: {},
      offsetPosition_: null
    };
  },
  watch: {
    withArrow: {
      handler(withArrow) {
        this.withArrow_ = withArrow;
        this.updatePopperInstance();
      }
    },
    visible: {
      handler(visible) {
        this.visible_ = visible;
      }
    },
    placement: {
      handler(placement) {
        this.placement_ = placement;
        this.updatePopperInstance();
      }
    }
  },
  computed: {
    bodyClasses() {
      return { "fd-popover__popper--no-arrow": !this.withArrow_ };
    },
    arrowStylesWithUnits() {
      const { arrowStyles_ } = this;
      const top = withPx(arrowStyles_.top);
      const left = withPx(arrowStyles_.left);
      return { top, left };
    },
    outOfBoundariesState() {
      return this.hide_ ? true : undefined;
    },

    // We merge the user defined modifiers with the modifiers required by FdPopper
    modifiers_() {
      return {
        ...this.modifiers,
        arrow: {
          enabled: this.withArrow,
          element: this.withArrow ? this.elements().arrow : undefined
        },
        preventOverflow: {
          enabled: true,
          escapeWithReference: true,
          boundariesElement: "scrollParent"
        },
        applyStyle: { enabled: false },
        updateStateModifier: {
          enabled: true,
          fn: this.updateState,
          order: 900
        }
      };
    },
    popperStyles() {
      const position = this.offsetPosition_;
      const styles = {
        position,
        ...this.popperStyles_
      };
      return styles;
    }
  },
  beforeDestroy() {
    document.querySelector("body").removeChild(this.elements().body);
  },
  async mounted() {
    await this.$nextTick();
    const popoverBody = this.elements().body;
    popoverBody.parentNode.removeChild(popoverBody);
    const body = document.querySelector("body");
    body.appendChild(popoverBody);
    this.updatePopperInstance();
  }
};
</script>
