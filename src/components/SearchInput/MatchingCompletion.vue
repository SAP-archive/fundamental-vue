<template>
  <FdMenuLink :selected="selected" @click="$emit('click', $event)">
    <strong v-if="matchingPrefix != null && matchingPrefix.length > 0">{{ matchingPrefix }}</strong>
    {{ remainingCompletion }}
  </FdMenuLink>
</template>

<script>
import FdMenuLink from "./../Menu/MenuLink.vue";

export default {
  name: "FdMatchingCompletion",
  components: { FdMenuLink },
  props: {
    selected: { type: Boolean, default: false },
    value: { type: String, default: null },
    matchingPrefix: { type: String, default: "" },
    remainingCompletion: { type: String, default: "" }
  }
};
</script>
