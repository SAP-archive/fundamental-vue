<template>
  <div
    class='rendered-markdown'
    style='padding: 50px;'
  >
    <div
      v-html="html"
      style='font-size: 1.2em; margin-bottom: 12px;'
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'highlight.js/styles/docco.css';

export default Vue.extend({
  props: {
    html: String
  },
})
</script>

<style lang="sass">
.rendered-markdown
  $headline-color: #35495e
  $text-color: #35495e
  $blockquote-color: lighten($text-color, 10%)

  @mixin heading
    color: $headline-color

  @mixin heading-1
    @include heading;

  h1
    @include heading
    padding-bottom: 30px
    font-size: 3rem
    font-weight: normal
    margin-bottom: 0

  h2
    @include heading
    font-size: 1.65rem
    padding-bottom: .3rem
    border-bottom: 1px solid #eaecef
    padding-top: 3rem

  h3
    @include heading
    font-size: 1.4rem
    padding-bottom: .3rem
    padding-top: 2.8rem

  p, ul, ol
    line-height: 35px
    color: $text-color
    margin-block-end: 16px
    margin-block-start: 16px

  ul ul, ol ol, ul ol, ol ul
    margin-block-end: 0px
    margin-block-start: 0px

  ul, ol
    padding-left: 1.2em

  pre
    background-color: #fcfcfc
    border: 1px solid #dbdfe1
    border-radius: 4px
    padding: 15px
    overflow: auto

  img
    max-width: 80%
    display: block
    margin-left: auto
    margin-right: auto
    border: 2px solid #efefef
    margin-top: 3rem
    margin-bottom: 3rem

  code
    padding-left: 7px
    padding-right: 7px
    padding-top: 2px
    padding-bottom: 2px
    color: #476582
    font-weight: 400
    font-size: 16px
    background-color: rgba(27,31,35,.05)

  // Styling for code samples
  pre > code
    color: #35495e
    padding: 0
    font-weight: 400
    font-size: 16px
    background-color: #fcfcfc

  blockquote
    $bg-color: #f2f7ff;
    $text-color: darken(desaturate($bg-color, 50%), 60%);

    border-left: 0.3rem solid $text-color
    margin-top: 20px
    margin-bottom: 20px
    margin-left: 0
    margin-right: 0
    padding: 20px
    font-style: italic
    background-color: $bg-color;
    p
      color: $text-color
      margin-block-end: 0
      margin-block-start: 0
</style>
