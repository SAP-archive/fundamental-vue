<template>
  <FdMenu @select="sayHi">
    <FdMenuList>
      <FdMenuItem>Option 1</FdMenuItem>
      <FdMenuItem>Option 2</FdMenuItem>
      <FdMenuItem>Option 3</FdMenuItem>
      <FdMenuItem>Option 4</FdMenuItem>
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