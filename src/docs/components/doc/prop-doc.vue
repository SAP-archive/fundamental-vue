<template>
  <div>
    <strong>{{ name }}</strong>
    <ul class="prop">
      <li>
        <p>
          <strong>Type:</strong>
          <code>{{ type }}</code>
        </p>
        <template v-if="hasTypeDescription">
          <div class="prop__description">
            <d-markdown :content="renderedTypeDescription" />
          </div>
        </template>
      </li>
      <li>
        <p>
          <strong>Default:</strong>
          <code>{{ defaultValue_ }}</code>
        </p>
      </li>
    </ul>
    <template v-if="hasDescribe">
      <div class="prop__description">
        <d-markdown :content="renderedDescription" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    hasDescribe() {
      return this.describe.length > 0;
    },
    hasTypeDescription() {
      return this.typeDesc.length > 0;
    },
    renderedTypeDescription() {
      return this.typeDesc.join("\n");
    },
    defaultValue_() {
      return this.defaultValue != null ? this.defaultValue : "–";
    },
    renderedDescription() {
      return this.describe.join("\n");
    }
  },
  props: {
    // Name of the prop.
    name: { type: String },
    // Either a single string which describes the type or an array of strings.
    type: {
      type: [String, Array],
      default: null
    },
    // Array of strings describing the type
    typeDesc: {
      type: Array,
      default: () => []
    },
    // String or array of strings representing the default value
    defaultValue: {
      type: [String, Array],
      default: null
    },
    // An array of strings describing the default value.
    defaultDesc: {
      type: Array,
      default: () => []
    },
    // An array of strings describing the prop.
    describe: {
      type: Array,
      default: () => []
    }
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
