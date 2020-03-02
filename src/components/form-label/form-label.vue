<script>
export default {
  name: 'FdFormLabel',
  functional: true,
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },
  render(h, { props, slots }) {
    const data = {
      staticClass: 'fd-form-label',
      class: {
        'fd-form-label--required': props.required
      },
      attrs: {
        'aria-required': String(props.required)
      }
    }
    return h('label', data, slots().default)
  }
}
</script>
