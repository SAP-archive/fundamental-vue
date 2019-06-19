<template>
  <markdown-it-vue :content="content" class="md-body" />
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
