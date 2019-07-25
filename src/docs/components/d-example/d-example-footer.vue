<template>
  <div class="fdd-example-footer">
    <div class="fdd-example-footer__toolbar" :class="toolbarClasses">
      <d-toolbar-item @click="codeVisible = !codeVisible" :icon="toggleCodeVisbilityIcon">
        {{ toggleCodeVisbilityTitle }}
      </d-toolbar-item>

      <div style="display: flex;">
        <d-toolbar-item v-show="codeVisible" title="Copy Code" @click="$copyText(code)" icon="copy">
          Copy
        </d-toolbar-item>

        <router-link title="Show Example in Fullscreen" target="_blank" :to="toFullscreen">
          <d-toolbar-item icon="full-screen">Fullscreen</d-toolbar-item>
        </router-link>

        <d-playground-button :code="code" />
      </div>
    </div>
    <expand-transition>
      <div v-show="codeVisible"><d-code-view :sourcecode="code"/></div>
    </expand-transition>
  </div>
</template>

<script>
import DToolbarItem from "./d-toolbar-item.vue";
import { resolveExample } from "./../../router/resolve-example";
import DPlaygroundButton from "./../d-playground-button/d-playground-button.vue";

export default {
  components: { DPlaygroundButton, DToolbarItem },
  props: {
    code: {
      type: String,
      required: true
    },
    exampleCollection: String,
    exampleName: String
  },
  computed: {
    toFullscreen() {
      const collection = this.exampleCollection;
      const example = this.exampleName;
      return resolveExample({ collection, example });
    },
    toolbarClasses() {
      return {
        "fdd-example-footer__toolbar--expanded": this.codeVisible
      };
    },
    toggleCodeVisbilityIcon() {
      return `navigation-${this.codeVisible ? "down" : "right"}-arrow`;
    },
    toggleCodeVisbilityTitle() {
      return this.codeVisible ? "Hide Code" : "Show Code";
    }
  },
  data() {
    return {
      codeVisible: false
    };
  }
};
</script>

<style lang="scss">
@import "./d-example";
.fdd-example-footer {
  border-top: $example-border;
  &__toolbar {
    padding: 10px;
    color: #aaaaaa;
    display: flex;
    justify-content: space-between;
    background-color: rgb(250, 250, 250);
    &--expanded {
      border-bottom: $example-border;
    }
  }
}
</style>
