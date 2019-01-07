<title>Default Side Navigation</title>
<docs>
You can construct a navigation by correctly nesting `FdSideNav`-related components such as `FdSideNavGroup`, `FdSideNavItem` etc. This gives you a lot of control.
</docs>
<template>
  <FdSideNav>
    <FdSideNavGroup>
      <FdSideNavGroupTitle>Group A</FdSideNavGroupTitle>
      <FdSideNavList>
        <FdSideNavItem>
            <FdSideNavLink>Item A-1</FdSideNavLink>
        </FdSideNavItem>
        <FdSideNavItem>
            <FdSideNavLink>Item A-2</FdSideNavLink>
        </FdSideNavItem>
        <FdSideNavItem>
            <FdSideNavLink>Item B</FdSideNavLink>
            <FdSideNavSubList>
              <FdSideNavSubItem>
                <FdSideNavSubLink>Item B-1</FdSideNavSubLink>
              </FdSideNavSubItem>
              <FdSideNavSubItem>
                <FdSideNavSubLink>Item B-2</FdSideNavSubLink>
              </FdSideNavSubItem>
            </FdSideNavSubList>
        </FdSideNavItem>
        <FdSideNavItem>
            <FdSideNavLink>Item C</FdSideNavLink>
            <FdSideNavSubList>
              <FdSideNavSubItem>
                <FdSideNavSubLink>Item C-1</FdSideNavSubLink>
              </FdSideNavSubItem>
              <FdSideNavSubItem>
                <FdSideNavSubLink>Item C-2</FdSideNavSubLink>
              </FdSideNavSubItem>
            </FdSideNavSubList>
        </FdSideNavItem>
      </FdSideNavList>
    </FdSideNavGroup>
  </FdSideNav>
</template>
