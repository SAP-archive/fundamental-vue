<template>
  <div>
    <strong>{{ name }}</strong>
    <ul class="prop">
      <li>
        <p>
          <strong>Type:</strong> <code>{{ type }}</code>
        </p>
      </li>
      <li>
        <p>
          <strong>Default:</strong> <code>{{ defaultValue_ }}</code>
        </p>
      </li>
    </ul>
    <template v-if="describe != null && describe.length > 0">
      <div class="prop__description" v-html="renderedDescription" />
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    defaultValue_() {
      return this.defaultValue != null ? this.defaultValue : "–";
    },
    renderedDescription() {
      return this.describe.join("<br />");
    }
  },
  props: {
    type: { type: [String, Array, Object] },
    name: { type: String },
    defaultValue: { default: null },
    describe: { type: Array, default: () => [] }
  }
};
</script>

<style>
.prop__description {
  line-height: 2em;
  margin-bottom: 2em;
}
ul.prop {
  padding-left: 2em;
}
.prop p {
  margin-block-end: 1em;
  margin-block-start: 1em;
  font-size: 0.85rem;
}
.prop code {
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  white-space: nowrap;
  background-color: #f8f8f8;
  font-size: 0.85rem;
  color: #ff0080;
}
</style>
