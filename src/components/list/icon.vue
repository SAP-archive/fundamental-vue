<script>
// <template>
//   <FdIcon class="fd-list__icon">
//     <slot />
//   </FdIcon>
// </template>
import Icon from './../icon/icon.vue'

export default {
  name: 'FdListIcon',
  functional: true,
  // components: { FdIcon },
  render(h, ctx) {
    const data = {
      ...ctx.data,
      class: 'fd-list__icon'
    }
    return h(Icon, data, ctx.children)
  }
}
</script>
