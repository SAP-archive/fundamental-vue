<template>
  <li>
    <slot>
      <template v-if="href == null && to != null">
        <!-- content fallback -->
        <ShellBarProductSwitcherItemImg :src="src"/>
        <ShellBarProductSwitcherItemTitle>{{title}}</ShellBarProductSwitcherItemTitle>
      </template>
      <a v-else :href="hrefForLink" @click="onClick">
        <ShellBarProductSwitcherItemImg :src="src"/>
        <ShellBarProductSwitcherItemTitle>{{title}}</ShellBarProductSwitcherItemTitle>
      </a>
    </slot>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import { warn } from "@/core";
import ShellBarProductSwitcherItemImg from './ShellBarProductSwitcherItemImg.vue';
import ShellBarProductSwitcherItemTitle from './ShellBarProductSwitcherItemTitle.vue';

export default Vue.extend({
  name: "FdShellBarProductSwitcherItem",
  components: { ShellBarProductSwitcherItemImg, ShellBarProductSwitcherItemTitle },
  props: {
    src: { type: String, default: "" },
    title: { type: String, default: "" },
    to: {
      type: [String, Object],
      required: false,
      default: null
    },
    href: {
      type: String,
      required: false,
      default: "#"
    }
  },
  computed: {
    hrefForLink(): string {
      return this.href || "#";
    }
  },
  methods: {
    onClick(event: MouseEvent) {
      // TODO: Do not always prevent default. Only if there is no to value.
      event.preventDefault();
      const { to, $router } = (this as any);
      if (to != null) {
        if ($router != null) {
          $router.push(to);
        } else {
          warn(`Tried to navigate to ${to} but $router not found.`);
        }
      }
      this.$emit("click", this);
    }
  },
});
</script>
