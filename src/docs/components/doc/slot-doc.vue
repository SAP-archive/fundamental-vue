<template>
  <div>
    <strong>{{ name }}</strong>
    <fd-badge style="margin-left: 10px;" v-if="scoped" filled>scoped</fd-badge>
    <template v-if="describe != null">
      <div class="slot__description" v-html="describe" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    scoped: { type: Boolean, default: false },
    name: { type: String, required: true },
    describe: { type: String, default: null }
  }
};
</script>

<style>
.slot__description {
  line-height: 2em;
  margin-bottom: 2em;
}
ul.slot {
  padding-left: 2em;
}
.slot p {
  margin-block-end: 1em;
  margin-block-start: 1em;
  font-size: 0.85rem;
}
.slot code {
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  white-space: nowrap;
  background-color: #f8f8f8;
  font-size: 0.85rem;
  color: #ff0080;
}
</style>
