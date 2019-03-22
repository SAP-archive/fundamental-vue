<template>
  <div>
    <ApiItem
      v-for="{ name, description } of slots"
      :key="name"
      :name="readableSlotName(name)"
      :description="description"
    />
  </div>
</template>

<script>
import ApiItem from "./components/ApiItem.vue";

export default {
  components: { ApiItem },
  props: { slots: Array, default: () => [] },
  methods: {
    isDefaultSlot(name) {
      return name === "";
    },
    readableSlotName(name) {
      return this.isDefaultSlot(name) ? "default" : name;
    }
  }
};
</script>
