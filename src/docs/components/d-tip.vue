<template>
  <div class="fdd-tip">
    <div class="fdd-tip__body"><slot /></div>
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
    > p {
      margin: 0;
      color: darken(desaturate(#f2f7ff, 50%), 60%);
    }
    pre[class*="language-"] {
      background-color: white;
      margin-top: 15px;
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid darken(desaturate(#f2f7ff, 50%), 10%);
    }
  }
  color: darken(desaturate(#f2f7ff, 50%), 60%);
  border-left: 0.3rem solid darken(desaturate(#f2f7ff, 50%), 60%);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: 0;
  padding: 20px;
  background-color: #f2f7ff;
  font-size: 16px;
  line-height: 29px;
  code {
    color: darken(desaturate(#f2f7ff, 50%), 60%);
    font-weight: 700;
    font-size: 0.85em;
    margin-block-end: 0;
    margin-block-start: 0;
    border-radius: 4px;
  }
}
</style>
