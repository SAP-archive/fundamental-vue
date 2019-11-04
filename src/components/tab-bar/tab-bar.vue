<template>
  <ul class="fd-tabs" role="tablist">
    <template v-for="item in items">
      <FdTabBarItemProvider :key="item" :item="item" :active="item === activeItem_">
        <slot :name="item" v-bind="propsForItem(item)" />
      </FdTabBarItemProvider>
    </template>
    <slot />
  </ul>
</template>

<script>
import FdTabBarItemProvider from './item-provider.vue'

export default {
  name: 'FdTabBar',
  components: { FdTabBarItemProvider },
  model: {
    event: 'activate',
    prop: 'activeItem'
  },
  watch: {
    activeItem(activeItem) {
      this.activeItem_ = activeItem
    },
    activeItem_(activeItem_) {
      this.$emit('activate', activeItem_)
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    activeItem: {
      type: String,
      default: null
    }
  },
  methods: {
    activateItem(item) {
      this.activeItem_ = item
    },
    propsForItem(item) {
      const { activeItem_, items } = this
      const active = item === activeItem_
      return {
        item,
        active,
        items,
        activeItem: activeItem_
      }
    }
  },
  data() {
    return {
      activeItem_: this.activeItem
    }
  },
  provide() {
    return {
      tabBar: this
    }
  }
}
</script>
