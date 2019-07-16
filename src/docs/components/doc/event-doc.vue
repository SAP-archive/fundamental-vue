<template>
  <div>
    <strong>{{ name }}</strong>
    <ul class="event">
      <li>
        <p>
          <strong>Sync:</strong>
          <code>{{ String(isSync) }}</code>
        </p>
      </li>
      <li v-if="isSync">
        <p>
          <strong>Sync Prop:</strong>
          <code>{{ syncProp }}</code>
        </p>
      </li>
      <li v-if="argumentsDesc.length">
        <strong>Arguments:</strong>
        <ol style="margin-left: 20px;" v-if="argumentsDesc.length > 0">
          <li v-for="arg in argumentsDesc" :key="String(arg)">{{ arg }}</li>
        </ol>
      </li>
    </ul>
    <template v-if="describe != null && describe.length > 0">
      <div class="event__description" v-html="renderedDescription" />
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    renderedDescription() {
      return this.describe.join("<br />");
    }
  },
  props: {
    name: { type: String },
    isSync: { type: Boolean, default: false },
    syncProp: { type: String, default: null },
    describe: { type: Array, default: () => [] },
    argumentsDesc: { type: Array, default: () => [] }
  }
};
</script>

<style>
.event__description {
  line-height: 2em;
  margin-bottom: 2em;
}
ul.event {
  padding-left: 2em;
}
.event p {
  margin-block-end: 1em;
  margin-block-start: 1em;
  font-size: 0.85rem;
}
.event code {
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  white-space: nowrap;
  background-color: #f8f8f8;
  font-size: 0.85rem;
  color: #ff0080;
}
</style>
