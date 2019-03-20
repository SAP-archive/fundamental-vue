<title>Identifiers</title>
<docs>
Identifier is a way to visually present something using an icon or user initials.
</docs>
<tip>
Include `aria-label` when there is no text equivalent for the identifier. This is not necessary if the identifier is used for illustrative purposes only.
</tip>
<template>
  <div class="identifiers">
    <FdIdentifier icon="washing-machine" />
    <FdIdentifier backgroundColor="accent-1" icon="washing-machine" />
    <FdIdentifier circle backgroundColor="accent-1" icon="washing-machine" />
    <FdIdentifier aria-label="Christian Kienle">CK</FdIdentifier>
    <FdIdentifier
      thumbnail
      :url="
        env === 'production'
          ? 'fundamental-vue/images/headshot-male.jpg'
          : '/images/headshot-male.jpg'
      "
    />
    <FdIdentifier
      circle
      thumbnail
      :url="
        env === 'production'
          ? 'fundamental-vue/images/headshot-male.jpg'
          : '/images/headshot-male.jpg'
      "
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      env: process.env.NODE_ENV
    };
  }
});
</script>

<style scoped>
.identifiers > span {
  margin-right: 10px;
}
</style>
