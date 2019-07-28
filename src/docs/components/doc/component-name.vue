<template>
  <div class="component-name" :id="id_">
    <router-link class="component-name__anchor" :to="to">#</router-link>
    <slot>
      {{ name }}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    name: { default: null, type: String }
  },
  computed: {
    to() {
      return {
        name: "api",
        query: {
          component: this.name
        },
        meta: {
          scrollToTop: false
        }
      };
    },
    id_() {
      return `component-${this.name}`;
    },
    href_() {
      return `#${this.id_}`;
    }
  }
};
</script>

<style lang="scss">
.component-name {
  font-size: 26px;
  margin-top: 15px;
  border-bottom: 1px solid #eaecef;
  padding-bottom: 4px;
  font-weight: 600;
  color: rgb(44, 62, 80);
  &__anchor {
    color: rgb(181, 0, 154);
    font-weight: 600;
    opacity: 0;
    float: left;
    margin-left: -20px;
    padding-right: 5px;
    margin-right: 0;
  }
}
.component-name:hover .component-name__anchor {
  opacity: 1;
}
</style>
