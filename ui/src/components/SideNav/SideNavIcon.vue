<template>
  <span
    class="fd-side-nav__icon sap-icon--m"
    :class="iconClasses"
    role="presentation"
  />
</template>
<script lang="ts">
import { Icon, mixins } from "@/mixins";

export default mixins(Icon).extend({
  name: "FdSideNavIcon"
});
</script>
