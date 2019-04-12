<template>
  <FdMenuItem v-on="$listeners">
    <FdMenuLink>
      <strong v-if="matchingPrefix != null && matchingPrefix.length > 0">{{
        matchingPrefix
      }}</strong
      >{{ remainingCompletion }}
    </FdMenuLink>
  </FdMenuItem>
</template>

<script>
import FdMenuItem from "./../Menu/MenuItem.vue";
import FdMenuLink from "./../Menu/MenuLink.vue";

export default {
  name: "FdMatchingCompletion",
  components: { FdMenuItem, FdMenuLink },
  props: {
    matchingPrefix: { type: String, default: "" },
    remainingCompletion: { type: String, default: "" }
  }
};
</script>
