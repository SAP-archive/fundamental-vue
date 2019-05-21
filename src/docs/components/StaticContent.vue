<template>
  <div class="rendered-markdown">
    <div v-html="html" style="font-size: 1.2em; margin-bottom: 12px;" />
  </div>
</template>

<script>
import "highlight.js/styles/docco.css";

export default {
  props: {
    html: String
  }
};
</script>

<style lang="scss">
$headline-color: #35495e;
$text-color: #35495e;
$blockquote-color: lighten($text-color, 10%);

.rendered-markdown {
  h1 {
    color: $headline-color;
    padding-bottom: 30px;
    font-size: 3rem;
    font-weight: normal;
    margin-bottom: 0;
  }

  h2 {
    color: $headline-color;
    font-size: 1.65rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #eaecef;
    padding-top: 3rem;
  }

  h3 {
    color: $headline-color;
    font-size: 1.4rem;
    padding-bottom: 0.3rem;
    padding-top: 2.8rem;
  }

  p,
  ul,
  ol {
    line-height: 35px;
    color: $text-color;
    margin-block-end: 16px;
    margin-block-start: 16px;
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin-block-end: 0px;
    margin-block-start: 0px;
  }

  ul,
  ol {
    padding-left: 1.2em;
  }

  pre {
    background-color: #fcfcfc;
    border: 1px solid #dbdfe1;
    border-radius: 4px;
    padding: 15px;
    overflow: auto;
  }

  img {
    max-width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid #efefef;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  code {
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
    color: #476582;
    font-weight: 400;
    font-size: 16px;
    background-color: rgba(27, 31, 35, 0.05);
  }

  // Styling for code samples
  pre > code {
    color: #35495e;
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    background-color: #fcfcfc;
  }

  blockquote {
    color: darken(desaturate(#f2f7ff, 50%), 60%);
    border-left: 0.3rem solid darken(desaturate(#f2f7ff, 50%), 60%);
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 0;
    margin-right: 0;
    padding: 20px;
    font-style: italic;
    background-color: #f2f7ff;
    p {
      color: darken(desaturate(#f2f7ff, 50%), 60%);
      margin-block-end: 0;
      margin-block-start: 0;
    }
  }
}
</style>
