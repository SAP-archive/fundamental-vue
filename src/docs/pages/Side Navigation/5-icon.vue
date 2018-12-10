<title>Side Navigation with `v-model`</title>
<condensed />

<template>
  <FdSideNav :v-model="active" indexPath="2">
    <FdSideNavList @select="handleSelect" header="Group Title">
      <FdSideNavItem icon="home" itemId="1">Menu Item 1</FdSideNavItem>
      <FdSideNavItem icon="home" itemId="2" submenuTitle="Submenu 2">
          <FdSideNavItem icon="home" itemId="2-1">Link Item 2-1</FdSideNavItem>
          <FdSideNavItem icon="home" itemId="2-2">Link Item 2-2</FdSideNavItem>
      </FdSideNavItem>
      <FdSideNavItem icon="home" itemId="3" submenuTitle="Submenu 3">
          <FdSideNavItem icon="home" itemId="3-1">Link Item 3-1</FdSideNavItem>
          <FdSideNavItem icon="home" itemId="3-2">Link Item 3-2</FdSideNavItem>
      </FdSideNavItem>
      <FdSideNavItem icon="home" itemId="4">Menu Item 4</FdSideNavItem>
    </FdSideNavList>
  </FdSideNav>
</template>

<script>
export default {
  data() {
    return {
      active: '2',
    };
  },
  methods: {
    handleSelect(item) {
    },
  },
};
</script>