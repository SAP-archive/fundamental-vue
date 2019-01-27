<template>
  <span :class="classes">{{text}}</span>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropDocumentation } from '@/api';

const unspecifiedValue = PropDocumentation.unspecifiedValue();

export default Vue.extend({
  props: {
    representedValue: {
      required: true,
      default: unspecifiedValue,
    }
  },
  computed: {
    classesAndText(): [string[], string] {
      const value = this.representedValue;
      if (value === undefined) {
        return [[], ''];
      }
      let classSuffix = '';
      let text = '';
      if (value == null) {
        classSuffix = 'null';
        text = 'null';
      } else {
        if (typeof value === 'number') { classSuffix = 'number'; text = String(value); }
        if (typeof value === 'object') { classSuffix = 'object'; text = JSON.stringify(value); }
        if (typeof value === 'string') { classSuffix = 'string'; text = `\u275D${value}\u275E`; }
        if (typeof value === 'boolean') { classSuffix = 'boolean'; text = String(value); }
        if (Array.isArray(value)) { classSuffix = 'array'; text = value.toString(); }
        if (typeof value === 'function') { classSuffix = 'function'; text = 'function(…) {…}'; }
        if (value === unspecifiedValue) {
          classSuffix = 'unspecified'; text = 'not specified';
        }
      }
      if(typeof value === 'symbol') {
      }
      return [['value-token', `value-token__${classSuffix}`], text];
    },
    text(): string {
      return this.classesAndText[1];
    },
    classes(): string[] {
      return this.classesAndText[0];
    }
  }
})
</script>

<style scoped>
.value-token {
  font-size: 12px;
  padding: 5px;
  border-radius: 4px;
}

.value-token__number {
  color: rgb(105, 1, 137);
  background-color: rgb(250, 234, 255);
}

.value-token__object {
  color: rgb(216, 244, 255);
  background-color: rgb(0, 100, 137);
}

.value-token__string {
  color: gray;
  background-color: clear;
}

.value-token__boolean {
  color: rgb(150, 72, 0);
  background-color: rgb(255, 243, 232);
}

.value-token__array {
  color: rgb(130, 0, 0);
  background-color: rgb(255, 206, 206);
}

.value-token__function {
  color: rgb(86, 86, 86);
  background-color: rgb(237, 237, 237);
}

.value-token__null {
  font-family: monospace;
  color: rgb(86, 86, 86);
  background-color: rgb(237, 237, 237);
}

.value-token__unspecified {
  color: rgb(200, 200, 200);
  background-color: clear;
}
</style>
