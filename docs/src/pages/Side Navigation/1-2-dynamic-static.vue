<title>Mixing static with dynamic Content</title>
<docs>You can have mutliple `FdSideNavGroup`s and multiple `FdSideNavList`s within a single `FdSideNav`. This makes it very easy to have a side navigation with static items (*Home*, *Readme*, *Imprint*, …) and dynamic items (`items`-prop).
</docs>

<template>
  <FdSideNav>
    <FdSideNavGroup>
      <FdSideNavGroupTitle>Dynamic Content</FdSideNavGroupTitle>
      <FdSideNavList :items="items" />
    </FdSideNavGroup>
    <FdSideNavGroup>
      <FdSideNavGroupTitle>Static Content</FdSideNavGroupTitle>
      <FdSideNavList>
        <FdSideNavItem
          ><FdSideNavLink>Static Item A</FdSideNavLink></FdSideNavItem
        >
        <FdSideNavItem
          ><FdSideNavLink>Static Item B</FdSideNavLink></FdSideNavItem
        >
        <FdSideNavItem
          ><FdSideNavLink>Static Item C</FdSideNavLink></FdSideNavItem
        >
      </FdSideNavList>
    </FdSideNavGroup>
  </FdSideNav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: "Item 1" },
        { name: "Item 2" },
        {
          name: "Item 3",
          children: [
            { name: "Item 3-1" },
            { name: "Item 3-2" },
            { name: "Item 3-3" }
          ]
        },
        { name: "Item 4" },
        { name: "Item 5" }
      ]
    };
  }
};
</script>
