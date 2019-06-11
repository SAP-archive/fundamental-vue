<template>
  <span class="fd-side-nav__icon" :class="iconClasses" role="presentation" />
</template>
<script>
import { Icon } from "./../../mixins";

export default {
  name: "FdSideNavIcon",
  mixins: [Icon]
};
</script>
