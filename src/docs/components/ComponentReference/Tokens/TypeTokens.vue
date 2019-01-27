<template>
  <span>
    <TypeToken
      v-for="(propType, index) in propTypes"
      :key="String(index)"
      :propType="propType"
    />
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropValidator } from 'vue/types/options';
import { PropType } from '@/api/Model/PropDocumentation';
import TypeToken from './TypeToken.vue';

export default Vue.extend({
  components: { TypeToken },
  props: {
    propTypes: { type: Array, required: true } as PropValidator<PropType[]>,
  },
})
</script>
