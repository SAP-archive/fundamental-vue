<template>
  <markdown-it-vue data-fdv-markdown :content="content" class="md-body" />
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
export default {
  components: { MarkdownItVue },
  props: {
    options: {
      type: Object,
      default: () => ({
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          target: "_blank",
          rel: "noopener"
        }
      })
    },
    content: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
div[data-fdv-markdown].md-body {
  ol {
    margin-left: 15px;
    li {
      margin-left: 15px;
    }
  }
  ul {
    margin-left: 15px;
    li {
      margin-left: 15px;
    }
  }
}
</style>
