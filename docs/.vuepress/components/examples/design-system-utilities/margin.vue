<template>
  <div class="container">
    <div v-fd-margin:small>
      v-fd-margin:small
    </div>

    <div v-fd-margin:small.top.left>
      v-fd-margin:small.top.left
    </div>

    <div v-fd-margin:small.top.left v-fd-margin:medium.bottom.right>
      v-fd-margin:small.top.left v-fd-margin:medium.bottom.right
    </div>
  </div>
</template>

<style scoped>
.container div {
  border: 1px solid #cccccc;
  font-family: monospace;
  background-color: #efefef;
}
</style>
