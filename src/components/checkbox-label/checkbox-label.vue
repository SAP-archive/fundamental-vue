<script>
export default {
  name: 'FdCheckboxLabel',
  functional: true,
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },
  render(h, { data, props, slots }) {
    const newData = {
      ...data,
      staticClass: 'fd-checkbox__label',
      class: {
        'fd-checkbox__label--required': props.required
      },
      attrs: {
        ...data.attrs,
        'aria-required': String(props.required)
      }
    }
    return h('label', newData, slots().default)
  }
}
</script>
