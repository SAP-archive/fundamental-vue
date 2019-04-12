<template>
  <pre
    class="sourcecode"
    v-highlight
  ><code class="sourcecode lang-js">{{sourcecode}}</code></pre>
</template>

<script>
import { highlight } from "./../directives/highlight";

export default {
  name: "CodeView",
  props: {
    sourcecode: String
  },
  directives: { highlight }
};
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
