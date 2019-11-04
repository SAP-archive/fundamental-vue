<template>
  <div class="fd-product-switch__icon" :class="iconClasses">
    <slot />
  </div>
</template>

<script>
import IconMixin from './../../mixins/icon'
export default {
  name: 'FdProductSwitcherIcon',
  mixins: [IconMixin]
}
</script>
