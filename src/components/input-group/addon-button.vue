<script>
import InputGroupAddon from './addon.vue'

export default {
  name: 'FdInputGroupAddonButton',
  functional: true,
  render(h, ctx) {
    const data = {
      ...ctx.data,
      class: 'fd-input-group__addon--button'
    }
    return h(InputGroupAddon, data, ctx.children)
  }
}
</script>
