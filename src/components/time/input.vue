<script>
// <template functional>
//   <FdTextInput v-on="listeners" class="fd-time__input" maxlength="2" v-bind="data.attrs" />
// </template>
import TextInput from './../controls/text-input.vue'
export default {
  name: 'FdTimeInput',
  functional: true,
  render(h, ctx) {
    const attrs = {
      ...ctx.data.attrs,
      maxlength: '2'
    }

    const data = {
      ...ctx.data,
      attrs,
      class: 'fd-time__input'
    }
    return h(TextInput, data, ctx.children)
  }
}
</script>
