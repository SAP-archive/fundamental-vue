<script>
import Button from './../button/button.vue'
export default {
  name: 'FdShellBarActionButton',
  functional: true,
  render(h, ctx) {
    const data = {
      ...ctx.data,
      class: 'fd-shellbar__button'
    }
    return h(Button, data, ctx.children)
  }
}
</script>
