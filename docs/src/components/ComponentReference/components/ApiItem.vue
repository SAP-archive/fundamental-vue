<template>
  <div class="api-item">
    <code class="api-item__name">{{ name }}</code
    ><TypeTokens :propTypes="types" />
    <p class="api-item__description">{{ description }}</p>
  </div>
</template>

<script>
import { ValueToken, TypeTokens } from "./../Tokens";
export default {
  props: {
    types: { type: Array, default: () => [] },
    name: { type: String, default: "" },
    description: { type: String, default: "" }
  },
  components: { TypeTokens }
};
</script>

<style lang="scss">
.api-item {
  margin-bottom: 25px;
}

.api-item__name {
  background-color: #efefef;
  font-size: 12px;
  padding: 5px;
  border-radius: 4px;
  font-weight: bold;
}
.api-item__description {
  font-size: 12px;
  padding: 5px;
}
</style>
