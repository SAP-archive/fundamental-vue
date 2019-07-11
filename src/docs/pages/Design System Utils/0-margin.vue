<title>Margin (mixed)</title>
<tip>Supported size classes: `none`, `tiny`, `small`, `medium`, `large`. By default the size is applied to all sides. You can constrain the sides by using the modifiers `top`, `left`, `bottom` and `right`.</tip>
<template>
  <div class="fdd-utils__container--0">
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

<style>
.fdd-utils__container--0 > div {
  background-color: #cccccc;
  border: 1px solid black;
}
</style>
