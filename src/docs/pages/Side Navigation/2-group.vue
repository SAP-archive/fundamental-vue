<title>Grouped Side Navigation</title>

<template>
  <FdSideNav :defaultItemId="activeId">
    <FdSideNavList header="Group Title" @select="handleSelect">
      <FdSideNavItem itemId="1-1">Link Item 1</FdSideNavItem>
      <FdSideNavItem itemId="1-2">Link Item 2</FdSideNavItem>
      <FdSideNavItem itemId="1-3">Link Item 3</FdSideNavItem>
      <FdSideNavItem itemId="1-4">Link Item 4</FdSideNavItem>
    </FdSideNavList>
    <FdSideNavList header="Group Title" @select="handleSelect">
      <FdSideNavItem itemId="2-1">Link Item 1</FdSideNavItem>
      <FdSideNavItem itemId="2-2">Link Item 2</FdSideNavItem>
      <FdSideNavItem itemId="2-3">Link Item 3</FdSideNavItem>
      <FdSideNavItem itemId="2-4">Link Item 4</FdSideNavItem>
    </FdSideNavList>
  </FdSideNav>
</template>

<script>
export default {
  data() {
    return {
      activeId: '1-2',
    };
  },
  methods: {
    handleSelect(item) {
      this.activeId = item.itemId;
    },
  },
};
</script>