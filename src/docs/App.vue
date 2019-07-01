<script>
import Vue from "vue";
// This is our main component.
// It simply looks up the layout to render and does exactly that.
export default {
  // functional: true,
  render(h) {
    const route = this.$route;
    const layout = (route.meta.layout || "default") + "-layout";
    const ctor = Vue.component(layout);
    return h(ctor);
  }
};
</script>
