<script>
export default {
  name: 'FdRadioLabel',
  functional: true,
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, slots, data }) {
    const newData = {
      ...data,
      staticClass: 'fd-radio__label',
      class: {
        'fd-radio__label--required': props.required
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
