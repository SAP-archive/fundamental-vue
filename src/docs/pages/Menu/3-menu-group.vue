<title>Menu w/ Group</title>
<condensed />

<template>
  <FdMenu @select="sayHi">
    <FdMenuList>
      <FdMenuItem>Option 1</FdMenuItem>
      <FdMenuItem>Option 2</FdMenuItem>
      <FdMenuItem>Option 3</FdMenuItem>
    </FdMenuList>
    <FdMenuList header="Group Header">
      <FdMenuItem>Option 4</FdMenuItem>
      <FdMenuItem>Option 5</FdMenuItem>
      <FdMenuItem>Option 6</FdMenuItem>
    </FdMenuList>
  </FdMenu>
</template>

<script>
export default {
  methods: {
    sayHi(value) { alert(`Hi >>${value}<<`); },
  },
};
</script>