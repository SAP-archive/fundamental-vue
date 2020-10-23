<script>
export default {
  name: 'FdDialogTitle',
  props: {
    visualHeadingLevel: {
      type: Number,
      default: 5
    },
    tag: {
      type: String,
      default: 'h2'
    }
  },
  render(h) {
    const { tag, visualHeadingLevel } = this
    // TODO:
    // fd-title--h$ does not seem to exist in the current version of fundamental styles.
    // After upgrading we have to double check.
    const classes = visualHeadingLevel != null ? `fd-title--h${visualHeadingLevel}` : ''
    const data = {
      staticClass: 'fd-title',
      class: classes,
      attrs: {
        id: 'dialog-title-1'
      }
    }
    return h('h2', data, this.$slots.default)
  }
}
</script>
