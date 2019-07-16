<template>
  <div class="fd-user-menu__control" role="button" v-on="$listeners">
    <slot>
      <fd-identifier size="s" backgroundColor="accent-6" circle icon="person-placeholder" />
    </slot>
  </div>
</template>

<script>
import FdIdentifier from "./../../Identifier/Identifier.vue";

export default {
  name: "FdShellBarUserMenuControl",
  components: { FdIdentifier }
};
</script>
