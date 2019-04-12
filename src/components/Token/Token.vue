<template>
  <span class="fd-token" role="button" v-on="$listeners">
    <slot />
  </span>
</template>

<script>
export default {
  name: "FdToken"
};
</script>
