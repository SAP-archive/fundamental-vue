<template>
  <FdMenuItem v-on="$listeners">
    <strong v-if="matchingPrefix != null && matchingPrefix.length > 0">{{
      matchingPrefix
    }}</strong
    >{{ remainingCompletion }}</FdMenuItem
  >
</template>

<script>
import FdMenuItem from "./../Menu/MenuItem.vue";

export default {
  name: "FdMatchingCompletion",
  components: { FdMenuItem },
  props: {
    matchingPrefix: { type: String, default: "" },
    remainingCompletion: { type: String, default: "" }
  }
};
</script>
