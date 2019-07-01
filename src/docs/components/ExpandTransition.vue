<template>
  <transition
    name="expand"
    @after-leave="afterLeave"
    @leave="leave"
    @before-leave="beforeLeave"
    @after-enter="afterEnter"
    @enter="enter"
    @before-enter="beforeEnter"
  >
    <slot />
  </transition>
</template>

<script>
// Use data('Key') when you want to create a dataset-key. By doing so you ensure to only get properly
// namespaces keys.
const dataKey = name => `fdExpandTransition${name}`;

const addClass = ({ classList }, className) => {
  if (classList.contains(className)) {
    return;
  }
  classList.add(className);
};

const removeClass = ({ classList }, className) => {
  if (!classList.contains(className)) {
    return;
  }
  classList.remove(className);
};

export default {
  name: "ExpandTransition",
  methods: {
    beforeEnter(el) {
      addClass(el, "collapse-transition");
      const style = window.getComputedStyle(el);
      el.dataset[dataKey("OldPaddingTop")] = style.paddingTop || undefined;
      el.dataset[dataKey("OldPaddingBottom")] = style.paddingBottom || undefined;
      el.style.height = "";
      el.style.paddingTop = "";
      el.style.paddingBottom = "";
    },

    enter(el) {
      const style = window.getComputedStyle(el);
      el.dataset[dataKey("OldOverflow")] = style.overflow || undefined;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.paddingTop = el.dataset[dataKey("OldPaddingTop")] || null;
        el.style.paddingBottom = el.dataset[dataKey("OldPaddingBottom")] || null;
      } else {
        el.style.height = "";
        el.style.paddingTop = el.dataset[dataKey("OldPaddingTop")] || null;
        el.style.paddingBottom = el.dataset[dataKey("OldPaddingBottom")] || null;
      }
      el.style.overflow = "hidden";
    },

    afterEnter(el) {
      removeClass(el, "collapse-transition");
      el.style.height = "";
      el.style.overflow = el.dataset[dataKey("OldOverflow")] || null;
    },

    beforeLeave(el) {
      const style = window.getComputedStyle(el);
      el.dataset[dataKey("OldPaddingTop")] = style.paddingTop || undefined;
      el.dataset[dataKey("OldPaddingBottom")] = style.paddingBottom || undefined;
      el.dataset[dataKey("OldOverflow")] = style.overflow || undefined;

      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },

    leave(el) {
      if (el.scrollHeight !== 0) {
        addClass(el, "collapse-transition");
        el.style.height = "0";
        el.style.paddingTop = "0";
        el.style.paddingBottom = "0";
      }
    },

    afterLeave(el) {
      removeClass(el, "collapse-transition");
      el.style.height = "";
      el.style.overflow = el.dataset[dataKey("OldOverflow")] || null;
      el.style.paddingTop = el.dataset[dataKey("OldPaddingTop")] || null;
      el.style.paddingBottom = el.dataset[dataKey("OldPaddingBottom")] || null;
    }
  }
};
</script>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.25s ease-in-out;
  overflow: hidden;
  transition-property: height;
}
.expand {
  transform: translateZ(0);
}

.expand-enter {
  height: 0;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
.collapse-transition {
  transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
</style>
