<template>
  <li class="fd-tabs__item">
    <slot />
  </li>
</template>

<script>
import UidMixin from './../../mixins/uid'
export default {
  name: 'FdTabBarItem',
  mixins: [UidMixin]
}
</script>
