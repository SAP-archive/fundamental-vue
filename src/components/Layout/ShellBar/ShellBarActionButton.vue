<template>
  <button v-on="$listeners" class="fd-button--shell" v-fd-icon="icon">
    <slot />
  </button>
</template>

<script>
import { Icon } from "./../../../mixins";
import icon from "./../../../directives/icon";

export default {
  name: "FdShellBarActionButton",
  mixins: [Icon],
  directives: {
    "fd-icon": icon
  }
};
</script>
