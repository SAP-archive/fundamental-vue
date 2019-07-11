<title>Padding (mixed)</title>
<tip>Supported size classes: `none`, `tiny`, `small`, `medium`, `large`. By default the size is applied to all sides. You can constrain the sides by using the modifiers `top`, `left`, `bottom` and `right`.</tip>

<template>
  <div class="fdd-utils__container--1">
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

<style>
.fdd-utils__container--1 > div {
  background-color: #cccccc;
  border: 1px solid black;
}
</style>
