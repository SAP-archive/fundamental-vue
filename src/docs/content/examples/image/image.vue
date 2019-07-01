<template>
  <div class="fdd-image--default">
    <fd-image size="s" :url="$withBase('images/img-small.jpeg')" />
    <fd-image size="m" :url="$withBase('images/img-small.jpeg')" />
    <fd-image size="l" :url="$withBase('images/img-small.jpeg')" />
    <br />
    <br />
    <fd-image size="s" circle :url="$withBase('images/img-small.jpeg')" />
    <fd-image size="m" circle :url="$withBase('images/img-small.jpeg')" />
    <fd-image size="l" circle :url="$withBase('images/img-small.jpeg')" />
  </div>
</template>

<style>
.fdd-image--default > span {
  margin-right: 10px;
}
</style>
