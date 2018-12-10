<title>Margin (mixed)</title>
<tip>Supported size classes: `none`, `tiny`, `small`, `medium`, `large`. By default the size is applied to all sides. You can constrain the sides by using the modifiers `top`, `left`, `bottom` and `right`.</tip>
<template>
  <div class="container">
    <div v-margin:small>
      v-margin:small
    </div>

    <div v-margin:small.top.left>
      v-margin:small.top.left
    </div>

    <div v-margin:small.top.left v-margin:medium.bottom.right>
      v-margin:small.top.left v-margin:medium.bottom.right
    </div>
  </div>
</template>

<style scoped>
.container div { border: 1px solid #cccccc; font-family: monospace; background-color: #efefef;  }
</style>
