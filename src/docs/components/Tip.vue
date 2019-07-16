<template>
  <div class="fdd-tip">
    <div class="fdd-tip__title">{{ title }}</div>
    <div class="fdd-tip__body" v-html="content" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String
  }
};
</script>

<style lang="scss">
.fdd-tip {
  &__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.7;
  }
  &__body {
    font-size: 16px;
  }
  color: darken(desaturate(#f2f7ff, 50%), 60%);
  border-left: 0.3rem solid darken(desaturate(#f2f7ff, 50%), 60%);
  margin-top: 20px;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
  padding: 30px;
  background-color: #f2f7ff;
  font-size: 16px;
  line-height: 29px;
  code {
    color: darken(desaturate(#f2f7ff, 50%), 60%);
    font-weight: 700;
    margin-block-end: 0;
    margin-block-start: 0;
  }
}
</style>
