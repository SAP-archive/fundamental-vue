<template>
  <div class="container">
    <div v-fd-padding:small>
      v-fd-padding:small
    </div>
    <div v-fd-padding:small.top.left>
      v-fd-padding:small.top.left
    </div>
    <div v-fd-padding:small.top.left v-fd-padding:medium.bottom.right>
      v-fd-padding:small.top.left v-fd-padding:medium.bottom.right
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
