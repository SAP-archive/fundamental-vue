<template>
  <span>
    <TypeToken
      v-for="(propType, index) in propTypes"
      :key="String(index)"
      :propType="propType"
    />
  </span>
</template>

<script>
import TypeToken from "./TypeToken.vue";

export default {
  components: { TypeToken },
  props: {
    propTypes: { type: Array, required: true }
  }
};
</script>
