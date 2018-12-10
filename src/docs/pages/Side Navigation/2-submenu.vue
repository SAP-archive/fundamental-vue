<title>Nested Side Navigation</title>
<condensed />

<template>
  <FdSideNav :v-model="activeId" indexPath="2">
    <FdSideNavList @select="handleSelect" header="Group Title">
      <FdSideNavItem itemId="1">Menu Item 1</FdSideNavItem>
      <FdSideNavItem itemId="2" submenuTitle="Submenu 2">
          <FdSideNavItem itemId="2-1">Link Item 2-1</FdSideNavItem>
          <FdSideNavItem itemId="2-2">Link Item 2-2</FdSideNavItem>
      </FdSideNavItem>
      <FdSideNavItem itemId="3" submenuTitle="Submenu 3">
          <FdSideNavItem itemId="3-1">Link Item 3-1</FdSideNavItem>
          <FdSideNavItem itemId="3-2">Link Item 3-2</FdSideNavItem>
      </FdSideNavItem>
      <FdSideNavItem itemId="4">Menu Item 4</FdSideNavItem>
    </FdSideNavList>
  </FdSideNav>
</template>

<script>
export default {
  data() {
    return {
      activeId: '1',
    };
  },
  methods: {
    handleSelect(item) {
      this.activeId = item.itemId;
    },
  },
};
</script>