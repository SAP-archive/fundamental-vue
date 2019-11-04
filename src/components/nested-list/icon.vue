<template>
  <span class="fd-nested-list__icon" :class="iconClasses"><slot /></span>
</template>

<script>
import IconMixin from './../../mixins/icon'

export default {
  name: 'FdNestedListIcon',
  mixins: [IconMixin]
}
</script>
