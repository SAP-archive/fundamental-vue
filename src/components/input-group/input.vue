<script>
import TextInput from './../controls/text-input.vue'
export default {
  name: 'FdInputGroupInput',
  functional: true,
  render(h, ctx) {
    const data = {
      ...ctx.data,
      class: 'fd-input-group__input'
    }
    return h(TextInput, data, ctx.children)
  }
}
</script>
