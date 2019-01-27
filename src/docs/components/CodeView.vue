<template>
  <pre class="sourcecode" v-highlight><code class="sourcecode lang-js">{{sourcecode}}</code></pre>
</template>

<script lang="ts">
import Vue from 'vue'
import { highlight } from '@/docs/directives/highlight';

export default Vue.extend({
  name: 'CodeView',
  props: {
    sourcecode: String,
  },
  directives: { highlight },
})
</script>

<style scoped>
.sourcecode {
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: rgb(250, 250, 250);
}

</style>
<style>
.hljs {
  background-color: rgb(250, 250, 250);
}
</style>
