<template>
  <span :class="classes" :ariaLabel="ariaLabel">{{formattedValue}}</span>
</template>

<script lang="ts">
import Vue from 'vue'

const typeMapping = {
  info: 'info',
  notification: 'notification',
};

const counterTypeValues = Object.values(typeMapping);

export default Vue.extend({
  name: 'FdCounter',
  props: {
    type: {
      type: String,
      default: 'info',
      acceptableValues: counterTypeValues,
      validator: (value: string) => counterTypeValues.indexOf(value) >= 0,
    },
    ariaLabel: String,
    value: { type: Number, default: 0 },
  },
  computed: {
    formattedValue(): string {
      return !isNaN(Number(this.value)) ? Number(this.value) <= 999 ? String(this.value) : '999+' : '1';
    },
    classes(): object {
      return {
        'fd-counter': true,
        'fd-counter--notification': this.type === 'notification',
      };
    }
  }
});
</script>
