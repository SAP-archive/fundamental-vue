<title>Removing Padding</title>
<tip>Use `v-fd-padding` multiple times to selectively remove padding.</tip>

<template>
  <div class="fdd-utils__container--2">
    <div v-fd-padding:medium v-fd-padding:none.left>
      v-fd-padding:medium v-fd-padding:none.left
    </div>
    <div v-fd-padding:medium v-fd-padding:none.left.bottom>
      v-fd-padding:medium v-fd-padding:none.left.bottom
    </div>
  </div>
</template>

<style>
.fdd-utils__container--2 > div {
  background-color: #cccccc;
  border: 1px solid black;
}
</style>
