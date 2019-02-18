<title>Removing Padding</title>
<tip>Use `v-padding` multiple times to selectively remove padding.</tip>

<template>
  <div class="container">
    <div v-padding:medium v-padding:none.left>
      v-padding:medium v-padding:none.left
    </div>
    <div v-padding:medium v-padding:none.left.bottom>
      v-padding:medium v-padding:none.left.bottom
    </div>
  </div>
</template>

<style scoped>
.container div {
  font-family: monospace;
  background-color: #efefef;
  border: 1px #cccccc solid;
  margin-block-end: 1rem;
}
</style>
