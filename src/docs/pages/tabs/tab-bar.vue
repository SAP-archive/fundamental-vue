<template>
  <FdTabBar
    v-model="activeItem"
    :items="['home', 'components', 'blog', 'directives', 'mixins', 'deprecated', 'more']"
  >
    <template #home>
      <FdTabBarItem>
        <FdTabBarLink>Home</FdTabBarLink>
      </FdTabBarItem>
    </template>

    <template #blog>
      <FdTabBarItem>
        <FdTabBarLink>
          Blog
          <FdCounter label="Number of new Posts" :value="42" />
        </FdTabBarLink>
      </FdTabBarItem>
    </template>

    <template #components>
      <FdTabBarItem>
        <FdTabBarLink>Components</FdTabBarLink>
      </FdTabBarItem>
    </template>

    <template #directives>
      <FdTabBarItem>
        <FdTabBarLink>Directives</FdTabBarLink>
      </FdTabBarItem>
    </template>

    <template #mixins>
      <FdTabBarItem>
        <FdTabBarLink>Mixins</FdTabBarLink>
      </FdTabBarItem>
    </template>

    <template #deprecated>
      <FdTabBarItem>
        <FdTabBarLink disabled>Deprecated</FdTabBarLink>
      </FdTabBarItem>
    </template>

    <template #more>
      <FdTabBarItem>
        <fd-context-menu>
          <template #button="{toggleContextMenu}"
            ><FdTabBarLink icon="overflow" @click="toggleContextMenu"
          /></template>

          <fd-menu-list>
            <FdMenuItem>New File</FdMenuItem>
            <FdMenuItem>New Window</FdMenuItem>
            <FdMenuItem>About Fundamental Vue</FdMenuItem>
            <FdMenuItem>Check for Updates…</FdMenuItem>
          </fd-menu-list>
        </fd-context-menu>
      </FdTabBarItem>
    </template>
  </FdTabBar>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 'home'
    }
  }
}
</script>
