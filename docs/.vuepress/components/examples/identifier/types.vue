<template>
  <div class="identifiers">
    <FdIdentifier icon="washing-machine" />
    <FdIdentifier backgroundColor="accent-1" icon="washing-machine" />
    <FdIdentifier circle backgroundColor="accent-1" icon="washing-machine" />
    <FdIdentifier aria-label="Christian Kienle">CK</FdIdentifier>
    <FdIdentifier thumbnail :url="$withBase('/images/headshot-male.jpg')" />
    <FdIdentifier
      circle
      thumbnail
      :url="$withBase('/images/headshot-male.jpg')"
    />
  </div>
</template>

<style scoped>
.identifiers > span {
  margin-right: 10px;
}
</style>
