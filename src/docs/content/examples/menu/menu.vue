<template>
  <fd-menu @select="sayHi">
    <fd-menu-list>
      <fd-menu-item value="1">Option 1</fd-menu-item>
      <fd-menu-item value="2">
        Option 2
      </fd-menu-item>
      <fd-menu-item value="3">
        Option 3
      </fd-menu-item>
      <fd-menu-item value="4">
        Option 4
      </fd-menu-item>
    </fd-menu-list>
  </fd-menu>
</template>

<script>
export default {
  methods: {
    sayHi(item) {
      alert(`Clicked Menu Item with value: '${item.value}'`);
    }
  }
};
</script>
