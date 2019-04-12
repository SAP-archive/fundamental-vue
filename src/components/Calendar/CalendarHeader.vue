<template>
  <header class="fd-calendar__header">
    <div class="fd-calendar__navigation">
      <CalendarAction
        icon="slim-arrow-left"
        type="standard"
        :disabled="!hasPrevious"
        @click="$emit('previous')"
      />
      <CalendarAction :title="month" @click="$emit('month')" />
      <CalendarAction :title="String(this.year)" @click="$emit('year')" />
      <CalendarAction
        type="standard"
        icon="slim-arrow-right"
        :disabled="!hasNext()"
        @click="$emit('next')"
      />
    </div>
  </header>
</template>

<script>
import CalendarAction from "./CalendarAction.vue";

export default {
  name: "FdCalendarHeader",
  components: { CalendarAction },
  props: {
    month: String,
    year: Number,
    hasPrevious: { type: Function, default: () => true },
    hasNext: { type: Function, default: () => true }
  }
};
</script>
