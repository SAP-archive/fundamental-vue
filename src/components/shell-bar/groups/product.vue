<script>
import Group from './../group.vue'
export default {
  name: 'FdShellBarProductGroup',
  functional: true,
  render(h, ctx) {
    const data = {
      ...ctx.data,
      class: 'fd-shellbar__group--product'
    }
    return h(Group, data, ctx.children)
  }
}
</script>
