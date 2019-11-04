<template>
  <span class="fd-calendar__text" role="button"><slot /></span>
</template>

<script>
export default {
  name: 'FdCalendarGroup',
  props: {
    tag: {
      type: String,
      default: 'tbody'
    }
  },
  render(h) {
    const { tag } = this
    const data = {
      class: 'fd-calendar__group'
    }
    return h(this.tag, data, this.$slots.default)
  }
}
</script>
