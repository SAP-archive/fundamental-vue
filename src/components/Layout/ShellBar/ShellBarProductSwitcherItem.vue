<template>
  <li>
    <slot>
      <a :href="hrefForLink" @click.prevent="onClick">
        <ShellBarProductSwitcherItemImg :src="src"/>
        <ShellBarProductSwitcherItemTitle>{{title}}</ShellBarProductSwitcherItemTitle>
      </a>
    </slot>
  </li>
</template>

<script lang="ts">
import ShellBarProductSwitcherItemImg from "./ShellBarProductSwitcherItemImg.vue";
import ShellBarProductSwitcherItemTitle from "./ShellBarProductSwitcherItemTitle.vue";
import { withTargetLocation, mixins } from "@/mixins";

export default mixins(withTargetLocation()).extend({
  name: "FdShellBarProductSwitcherItem",
  components: {
    ShellBarProductSwitcherItemImg,
    ShellBarProductSwitcherItemTitle
  },
  props: {
    src: { type: String, default: "" },
    title: { type: String, default: "" },
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
      if (this.to != null) {
        this.pushLocation(event);
        return;
      }
      this.$emit("click", this);
    }
  }
});
</script>
