<script>
import Group from './../group.vue'
export default {
  name: 'FdShellBarActionsGroup',
  functional: true,
  render(h, ctx) {
    const data = {
      ...ctx.data,
      class: 'fd-shellbar__group--actions'
    }
    return h(Group, data, ctx.children)
  }
}
</script>
