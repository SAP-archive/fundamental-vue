<template>
  <div class="fdd-identifier--types">
    <fd-identifier icon="washing-machine" />
    <fd-identifier backgroundColor="accent-1" icon="washing-machine" />
    <fd-identifier circle backgroundColor="accent-1" icon="washing-machine" />
    <fd-identifier aria-label="Christian Kienle">CK</fd-identifier>
    <fd-identifier thumbnail :url="$withBase('images/headshot-male.jpg')" />
    <fd-identifier circle thumbnail :url="$withBase('images/headshot-male.jpg')" />
  </div>
</template>

<style scoped>
.fdd-identifier--types,
.fd-identifier {
  margin-right: 10px;
}
</style>
