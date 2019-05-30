<template>
  <aspect-item>
    <aspect-col>{{ name }}</aspect-col>
    <aspect-col>{{ type }}</aspect-col>
    <aspect-col>{{ defaultValue_ }}</aspect-col>
  </aspect-item>
</template>

<script>
import AspectItem from "./aspect-item.vue";
import AspectCol from "./aspect-col.vue";

export default {
  components: { AspectCol, AspectItem },
  computed: {
    defaultValue_() {
      return this.defaultValue != null ? this.defaultValue : "–";
    }
  },
  props: {
    type: { type: [String, Array, Object] },
    name: { type: String },
    defaultValue: { default: null }
  }
};
</script>
