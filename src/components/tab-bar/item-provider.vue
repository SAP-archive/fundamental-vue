<script>
export default {
  props: {
    item: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      require: true
    }
  },
  provide() {
    return {
      fdTabBarItem: this.fdTabBarItem
    }
  },
  render() {
    return this.$scopedSlots.default()
  },
  watch: {
    item(item) {
      this.fdTabBarItem.item = item
    },
    active(active) {
      this.fdTabBarItem.active = active
    }
  },
  data() {
    const { item, active } = this
    return {
      fdTabBarItem: {
        item,
        active
      }
    }
  }
}
</script>
