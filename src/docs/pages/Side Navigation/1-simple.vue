<title>Side Navigation with one Level</title>
<condensed />

<template>
  <FdSideNav :v-model="activeId" indexPath="2">
    <FdSideNavList>
      <FdSideNavItem itemId="1">Link Item 1</FdSideNavItem>
      <FdSideNavItem itemId="2">Link Item 2</FdSideNavItem>
      <FdSideNavItem itemId="3">Link Item 3</FdSideNavItem>
      <FdSideNavItem itemId="4">Link Item 4</FdSideNavItem>
      <FdSideNavItem itemId="5">Link Item 5</FdSideNavItem>
      <FdSideNavItem itemId="6">Link Item 6</FdSideNavItem>
    </FdSideNavList>
  </FdSideNav>
</template>

<script>
export default {
  data() {
    return {
      activeId: '2',
    };
  }
};
</script>