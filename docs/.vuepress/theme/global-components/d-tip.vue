<template>
  <div class="d-tip" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  computed: {
    classes() {
      return {
        "d-tip--warn": this.warn
      };
    }
  },
  props: {
    warn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "TIP"
    }
  }
};
</script>

<style lang="scss">
.d-tip {
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
.d-tip--warn {
  $borderColor: #e7c000;
  $backgroundColor: rgba(255,229,100,.3);
  color: darken(desaturate($borderColor, 50%), 60%);
  border-left: 0.3rem solid $borderColor;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: 0;
  padding: 20px;
  background-color: $backgroundColor;
  font-size: 16px;
  line-height: 29px;
  p {
    color: darken(desaturate(#f2f7ff, 50%), 60%);
    margin-block-end: 0;
    margin-block-start: 0;
  }
}
</style>
