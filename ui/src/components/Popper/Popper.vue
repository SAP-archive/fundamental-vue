<template>
  <div ref="content" style="display: none">
    <slot />
  </div>
</template>

<script lang="ts">
import Popper from "popper.js";
import { mixins, Uid } from "@/mixins";
import { PropValidator } from "vue/types/options";
import { Vue as VueInstance } from "vue/types/vue";
import { VueClass } from "@/mixins/typesafeMixins";

const boundaryMapping = {
  scrollParent: "scrollParent",
  viewport: "viewport",
  window: "window"
};

const triggerMapping = {
  hover: "hover",
  click: "click",
  focus: "focus",
  manual: "manual"
};

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

type TargetFn = () => string | VueInstance | Element;

type Boundary = keyof typeof boundaryMapping;
const BoundaryIsValid = (value: any) =>
  typeof value === "string"
    ? Object.keys(boundaryMapping).includes(value)
    : true;

type Trigger = keyof typeof triggerMapping;
const TriggersIsValid = (value: string) =>
  value
    .trim()
    .split(/\s+/)
    .reduce((valid: boolean, t: string) => {
      return valid && Object.keys(triggerMapping).includes(t);
    }, true);

type Placement = keyof typeof placementMapping;
const PlacementIsValid = (value: string) => {
  return Object.keys(placementMapping).includes(value);
};

export default mixins(Uid).extend({
  name: "FdPopper",
  props: {
    target: {
      type: [String, Object, Element, Function],
      required: true
    } as PropValidator<string | VueInstance | Element | TargetFn>,
    placement: {
      type: String,
      default: "bottom",
      validator: PlacementIsValid
    } as PropValidator<Placement>,
    triggers: {
      type: String,
      default: "click",
      validator: TriggersIsValid
    } as PropValidator<string>,
    container: {
      type: String,
      default: null
    } as PropValidator<string>,
    boundary: {
      type: [String, Element],
      default: "scrollParent",
      validator: BoundaryIsValid
    } as PropValidator<Boundary | Element>,
    arrowElement: {
      type: [String, Element]
    } as PropValidator<string | Element>,
    wrapperHTML: {
      type: String,
      default: "<div class='popper' role='popper'></div>"
    } as PropValidator<string>,
    showOnCreate: { type: Boolean, default: false } as PropValidator<boolean>,
    outsideDismiss: { type: Boolean, default: true } as PropValidator<boolean>
  },
  data() {
    return {
      $popper: null as Popper | null,
      targetEl: null as Element | null,
      popperEl: null as Element | null,
      containerEl: null as Element | null
    };
  },
  async mounted() {
    await this.$nextTick();
    this.create();
  },
  beforeDestroy() {
    this.setListeners(false);
    this.hide();

    this.targetEl = null;
    this.containerEl = null;
    this.popperEl = null;
  },
  watch: {
    target(target, old) {
      if (this.targetEl !== null) {
        this.create(true);
      }
    }
  },
  methods: {
    create(recreate: boolean = false) {
      if (this.target) {
        this.targetEl = this.getTarget(recreate);
        if (this.targetEl) {
          this.containerEl = this.getContainer();

          if (this.showOnCreate) {
            if (recreate) {
              this.setListeners(false);
              this.hide();
            }
            this.show();
          }
          this.setListeners(true);
        }
      }
    },
    setListeners(on: boolean) {
      if (this.targetEl) {
        this.getEvents().forEach(event => {
          if (this.targetEl instanceof Element) {
            this.attachEvent(on, this.targetEl, event, this.handleEvent);
          }
        });
      }
    },
    setWhileOpenListeners(on: boolean) {
      const triggers = this.triggers.trim().split(/\s+/);

      if (this.popperEl && this.popperEl instanceof Element) {
        if (triggers.includes("focus")) {
          this.attachEvent(on, this.popperEl, "focusout", this.handleEvent);
        } else if (triggers.includes("hover")) {
          this.attachEvent(on, this.popperEl, "mouseleave", this.handleEvent);
        }
      }

      if (this.outsideDismiss) {
        this.attachEvent(on, window, "click", this.clickOutside);
      }
    },
    getEvents() {
      const events: Array<string> = [];
      const triggers = this.triggers.trim().split(/\s+/);

      triggers.forEach(trigger => {
        switch (trigger) {
          case "hover":
            events.push("mouseenter");
            events.push("mouseleave");
            break;
          case "focus":
            events.push("focusin");
            events.push("focusout");
            break;
          case "blur":
            events.push("focusout");
            break;
          case "click":
            events.push("click");
            events.push("keydown");
            break;
        }
      });

      return events;
    },
    handleEvent(e: Event | FocusEvent | KeyboardEvent) {
      const { type, target } = e;
      const { relatedTarget } = e as FocusEvent;
      const { keyCode } = e as KeyboardEvent;

      switch (type) {
        case "focusin":
        case "mouseenter":
          this.show();
          break;

        case "focusout":
          if (!this.isOutside(relatedTarget)) {
            break;
          }
          this.hide();
          break;

        case "mouseleave":
          if (this.isOutside(target)) {
            break;
          }
          if (!this.isOutside(relatedTarget)) {
            break;
          }
          this.hide();
          break;

        case "click":
          this.toggle();
          break;

        case "keydown":
          if (keyCode === 13) {
            this.show();
          } else if (keyCode === 27) {
            this.hide();
          }
          break;
      }
    },
    toggle() {
      !this.popperEl ? this.show() : this.hide();
    },
    show() {
      if (!this.targetEl) return;
      if (!document.body.contains(this.targetEl)) return;

      this.popperEl = this.getWrapperElement();
      if (!this.popperEl) return;

      this.$emit("show");

      const popperOpts = this.getPopperOpts();
      this.$popper = new Popper(this.targetEl, this.popperEl, popperOpts);
      this.$nextTick(() => {
        if (this.$popper) this.$popper.scheduleUpdate();
      });

      if (!document.body.contains(this.popperEl)) {
        (this.containerEl as Element).appendChild(this.popperEl);
        this.setPopperContent();
      }

      this.setWhileOpenListeners(true);
    },
    hide() {
      if (!this.popperEl) {
        return;
      }

      this.$emit("hide");
      this.cleanUp();
    },
    cleanUp() {
      this.setWhileOpenListeners(false);
      this.bringItBack();

      if (this.$popper) {
        this.$popper.destroy();
        this.$popper = null;
      }
      if (this.popperEl) {
        if (this.popperEl.parentNode)
          this.popperEl.parentNode.removeChild(this.popperEl);

        this.popperEl = null;
      }
    },
    clickOutside(event: Event) {
      if (this.isOutside(event.target)) {
        this.hide();
      }
    },
    isOutside(element: any) {
      if (element instanceof Element) {
        return !this.isPopperOrTarget(element);
      } else {
        return false;
      }
    },
    isPopperOrTarget(el: Element) {
      if (this.targetEl && this.targetEl.contains(el)) {
        return true;
      }
      if (this.popperEl && this.popperEl.contains(el)) {
        return true;
      }
      return false;
    },
    getTarget(recreate: boolean): Element | null {
      if (this.target && (!this.targetEl || recreate)) {
        let target = this.target;
        if (typeof target === "function") {
          target = target();
        }
        if (typeof target === "string") {
          // Assume ID of element
          return document.getElementById(
            /^#/.test(target) ? target.slice(1) : target
          );
        } else if (typeof target === "object") {
          if (
            (target as VueInstance).$el &&
            (target as VueInstance).$el.nodeType
          ) {
            // Component reference
            return (target as VueInstance).$el;
          } else if (target instanceof Element) {
            // Element reference
            return target;
          }
        }
        return null;
      }
      return this.targetEl;
    },
    getContainer() {
      if (!this.containerEl) {
        const body = document.body;
        return this.container ? this.select(this.container, body) : body;
      }
      return this.containerEl;
    },
    getWrapperElement(): Element | null {
      if (!this.popperEl) {
        const div = document.createElement("div");
        div.innerHTML = this.wrapperHTML.trim();
        this.mergeElementClasses(div);
        return div.firstElementChild;
      }
      return this.popperEl;
    },
    getPopperOpts(): Popper.PopperOptions {
      let opts: Popper.PopperOptions = {
        placement: this.placement,
        modifiers: {
          preventOverflow: {
            boundariesElement: this.boundary
          }
        }
      };

      if (this.arrowElement) {
        if (opts.modifiers) {
          opts.modifiers.arrow = { element: this.arrowElement };
        }
      }

      return opts;
    },
    setPopperContent(isHtml = true) {
      const container = this.popperEl;
      const content = this.getPopperContent();

      if (!(container instanceof HTMLElement)) return;
      if (!(content instanceof HTMLElement)) return;

      if (isHtml) {
        if (content.parentElement !== container) {
          container.innerHTML = "";
          container.appendChild(content);
        }
      } else {
        (container as HTMLElement).innerText = content.innerText;
      }
    },
    getPopperContent() {
      if (this.$refs.content instanceof Element) {
        return this.$refs.content.firstElementChild;
      }
    },
    bringItBack() {
      if (
        this.$refs.content instanceof Element &&
        this.popperEl &&
        this.popperEl.firstElementChild
      ) {
        this.$refs.content.innerHTML = "";
        this.$refs.content.appendChild(this.popperEl.firstElementChild);
      }
    },
    mergeElementClasses(target: Element) {
      if (!this.$el.className || !target || !target.firstElementChild) {
        return;
      }

      const classes = this.$el.className.trim().split(/\s+/);
      target.firstElementChild.className += ` ${classes}`;
    },
    attachEvent(
      isAttach: boolean,
      element: Element | Window,
      type: string,
      listener: EventListenerOrEventListenerObject
    ) {
      isAttach
        ? element.addEventListener(type, listener)
        : element.removeEventListener(type, listener);
    },
    select(selector: string, element: Element | Document) {
      if (!(element && element.nodeType)) {
        element = document;
      }
      return element.querySelector(selector) || null;
    }
  }
});
</script>
