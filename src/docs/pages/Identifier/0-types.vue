<title>Identifiers</title>
<docs>
Identifier is a way to visually present something using an icon or user initials.
</docs>
<tip>
Include `aria-label` when there is no text equivalent for the identifier. This is not necessary if the identifier is used for illustrative purposes only.
</tip>
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

<style>
.fdd-identifier--types > span {
  margin-right: 10px;
}
</style>
