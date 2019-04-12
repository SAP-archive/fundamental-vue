<title>Padding (mixed)</title>
<tip>Supported size classes: `none`, `tiny`, `small`, `medium`, `large`. By default the size is applied to all sides. You can constrain the sides by using the modifiers `top`, `left`, `bottom` and `right`.</tip>

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
