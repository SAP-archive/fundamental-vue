<template>
  <span :class="classes">{{typeName}}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options';

export default Vue.extend({
  props: {
    propType: { required: true } as PropValidator<any>,
  },
  computed: {
    typeName(): string {
      const propType = this.propType;
      return typeof propType === 'string' ? propType : propType.name;
    },
    classes(): object {
      const propType = this.propType;
      return {
        'type-token': true,
        'type-token__number': propType === Number,
        'type-token__object': propType === Object,
        'type-token__string': propType === String,
        'type-token__boolean': propType === Boolean,
        'type-token__array': propType === Array,
        'type-token__raw': typeof propType === 'string',
      };
    }
  },
})
</script>

<style scoped>
.type-token {
  font-size: 12px;
  padding: 5px;
}

.type-token:first-of-type {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.type-token:last-of-type {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.type-token__number {
  color: rgb(105, 1, 137);
  background-color: rgb(250, 234, 255);
}

.type-token__object {
  color: rgb(216, 244, 255);
  background-color: rgb(0, 100, 137);
}

.type-token__string {
  color: rgb(119, 1, 62);
  background-color: rgb(255, 232, 243);
}
.type-token__boolean {
  color: rgb(150, 72, 0);
  background-color: rgb(255, 243, 232);
}

.type-token__array {
  color: rgb(130, 0, 0);
  background-color: rgb(255, 206, 206);
}

.type-token__raw {
  color: rgb(86, 86, 86);
  background-color: rgb(237, 237, 237);
}
</style>
