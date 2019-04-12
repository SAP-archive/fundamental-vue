<title>Icon</title>
<docs>
Use the `v-fd-icon`-directive to attach icons to any element.
</docs>
<template>
  <div class="icons">
    <span v-fd-icon:compare />
    <span v-fd-icon:wrench />
    <span v-fd-icon:settings />
    <span v-fd-icon:synchronize />

    <br /><br />
    <p v-fd-font-weight:bold>Specify the size with modifiers:</p>
    <br />

    <span v-fd-icon:compare.s />
    <span v-fd-icon:compare.m />
    <span v-fd-icon:compare.l />
    <span v-fd-icon:compare.xl />

    <br /><br />
    <p v-fd-font-weight:bold>This also works with native buttons:</p>
    <br />

    <button v-fd-icon:compare.s />
    <button v-fd-icon:compare.m />
    <button v-fd-icon:compare.l />
    <button v-fd-icon:compare.xl />
  </div>
</template>

<style scoped>
.icons button {
  margin-right: 10px;
  padding: 5px;
}
.icons,
span {
  margin-right: 10px;
}
</style>
