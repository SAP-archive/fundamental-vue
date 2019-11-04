<template>
  <div>
    <FdTabBar v-model="activeItem" :items="['home', 'components', 'blog']">
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
    </FdTabBar>
    <FdTabPanel :active="activeItem === 'home'">
      Home
    </FdTabPanel>
    <FdTabPanel :active="activeItem === 'blog'">
      Blog
    </FdTabPanel>
    <FdTabPanel :active="activeItem === 'components'">
      Components
    </FdTabPanel>
  </div>
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
