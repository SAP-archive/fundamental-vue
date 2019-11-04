<template>
  <fd-menu @select="sayHi">
    <fd-menu-list>
      <FdMenuItem value="1">Option 1</FdMenuItem>
      <FdMenuItem value="2">
        Option 2
      </FdMenuItem>
      <FdMenuItem value="3">
        Option 3
      </FdMenuItem>
      <FdMenuItem value="4">
        Option 4
      </FdMenuItem>
    </fd-menu-list>
  </fd-menu>
</template>

<script>
export default {
  methods: {
    sayHi(item) {
      alert(`Clicked Menu Item with value: '${item.value}'`)
    }
  }
}
</script>
