<script>
import Vue from 'vue'

// This is our main component.
// It simply looks up the layout to render and does exactly that.
export default {
  render(h) {
    const route = this.$route
    const layout = (route.meta.layout || 'default') + '-layout'
    return h(layout)
  }
}
</script>

<style>
body {
  font-family: '72', sans-serif;
  background-color: #fff;
  margin: 0;
  overflow: hidden;
}
</style>
