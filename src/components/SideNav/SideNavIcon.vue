<template>
  <span
    class="fd-side-nav__icon sap-icon--m"
    :class="iconClasses"
    role="presentation"
  />
</template>
<script>
import { Icon } from "./../../mixins";

export default {
  name: "FdSideNavIcon",
  mixins: [Icon]
};
</script>
