<template>
  <a
    class="fd-tabs__link"
    :class="iconClasses"
    :aria-controls="uid"
    :aria-selected="String(active_)"
    :aria-disabled="String(disabled)"
    role="tab"
    v-on="$listeners"
    @click="makeActiveIfPossible"
  >
    <slot />
  </a>
</template>

<script>
import IconMixin from './../../mixins/icon'
export default {
  name: 'FdTabBarLink',
  mixins: [IconMixin],
  methods: {
    makeActiveIfPossible() {
      const { tabBar, disabled, item } = this
      if (tabBar == null || disabled === true) {
        return
      }
      tabBar.activateItem(item)
    }
  },
  props: {
    uid: String,
    active: Boolean,
    disabled: Boolean
  },
  computed: {
    active_() {
      const { item, tabBar, active } = this
      if (item == null || tabBar == null) {
        return active
      }
      return tabBar.activeItem_ == item
    },
    item() {
      const { fdTabBarItem } = this
      if (fdTabBarItem == null) {
        return
      }
      return fdTabBarItem.item
    }
  },
  inject: {
    fdTabBarItem: {
      default: null
    },
    tabBar: {
      default: null
    }
  }
}
</script>
