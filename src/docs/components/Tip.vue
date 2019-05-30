<template>
  <div class="tip">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.tip {
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
  p {
    color: darken(desaturate(#f2f7ff, 50%), 60%);
    margin-block-end: 0;
    margin-block-start: 0;
  }
}
</style>
