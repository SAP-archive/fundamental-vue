<template>
  <FdSideNav>
    <FdSideNavList :value="activeId" @select="handleSelect" header="Group Title">
      <FdSideNavItem itemId="1">Link Item 3</FdSideNavItem>
      <FdSideNavSubmenu itemId="2" title="Link Item Submenu">
          <FdSideNavSubitem itemId="2-1">Link Item 3</FdSideNavSubitem>
          <FdSideNavSubitem itemId="2-2">Link Item 3</FdSideNavSubitem>
      </FdSideNavSubmenu>
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