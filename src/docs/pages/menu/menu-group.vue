<template>
  <fd-menu @select="sayHi">
    <fd-menu-list>
      <FdMenuItem value="1-1">Option 1</FdMenuItem>
      <FdMenuItem value="1-2">Option 2</FdMenuItem>
      <FdMenuItem value="1-3">Option 3</FdMenuItem>
    </fd-menu-list>
    <fd-menu-list header="Group Header">
      <FdMenuItem value="2-1">Option 4</FdMenuItem>
      <FdMenuItem value="2-2">Option 5</FdMenuItem>
      <FdMenuItem value="2-3">Option 6</FdMenuItem>
    </fd-menu-list>
  </fd-menu>
</template>

<script>
export default {
  methods: {
    sayHi({ value }) {
      alert(`Hi >>${value}<<`)
    }
  }
}
</script>
