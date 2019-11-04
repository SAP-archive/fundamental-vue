<template>
  <div class="fd-shellbar__product">
    <FdShellBarProductTitle v-if="productTitle != null">{{ productTitle }}</FdShellBarProductTitle>
    <slot />
  </div>
</template>

<script>
import FdShellBarProductTitle from './product-title.vue'

export default {
  name: 'FdShellBarProduct',
  components: { FdShellBarProductTitle },
  props: { productTitle: { type: String, default: null } }
}
</script>
