<template>
  <FdCol class="fd-tree__col--control">
    <slot />
  </FdCol>
</template>

<script>
import FdCol from './col.vue'
import FdControl from './control.vue'

export default {
  name: 'FdTreeControlCol',
  components: {
    FdCol
  }
}
</script>
