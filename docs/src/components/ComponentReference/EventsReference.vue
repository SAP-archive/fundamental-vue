<template>
  <div>
    <ApiItem
      v-for="event of events"
      :key="event.name"
      :name="event.name"
      :description="event.description"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { EventDocumentation } from "@/api";
import { Prop } from "vue/types/options";
import ApiItem from "./components/ApiItem.vue";

export default Vue.extend({
  components: { ApiItem },
  props: {
    events: Array as Prop<EventDocumentation[]>
  }
});
</script>
