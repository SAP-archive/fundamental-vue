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
  background-color: #eeeeee;
  border: 1px solid #cccccc;
}
</style>
