<template>
  <aspect-item>
    <aspect-col>{{ name }}</aspect-col>
  </aspect-item>
</template>

<script>
import AspectItem from "./aspect-item.vue";
import AspectCol from "./aspect-col.vue";

export default {
  components: { AspectCol, AspectItem },
  props: {
    name: { type: String }
  }
};
</script>
