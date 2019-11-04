<template>
  <fd-menu @select="selectItem">
    <slot />
  </fd-menu>
</template>

<script>
import FdMenu from './../menu/menu.vue'
export default {
  name: 'FdComboboxMenu',
  inject: ['combobox'],
  components: { FdMenu },
  methods: {
    selectItem(item) {
      this.combobox.selectItem(item)
    }
  }
}
</script>
