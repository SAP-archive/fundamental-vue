<title>Nested Side Navigation</title>

<template>
  <FdSideNav :defaultItemId="activeId">
    <FdSideNavList @select="handleSelect" header="Group Title">
      <FdSideNavItem itemId="1">Link Item 3</FdSideNavItem>
      <FdSideNavItem itemId="2" submenuTitle="Link Item Submenu">
          <FdSideNavItem itemId="2-1">Link Item 3</FdSideNavItem>
          <FdSideNavItem itemId="2-2">Link Item 3</FdSideNavItem>
      </FdSideNavItem>
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