<template>
  <fd-menu @select="sayHi">
    <fd-menu-list>
      <fd-menu-item value="1-1">Option 1</fd-menu-item>
      <fd-menu-item value="1-2">Option 2</fd-menu-item>
      <fd-menu-item value="1-3">Option 3</fd-menu-item>
    </fd-menu-list>
    <fd-menu-list header="Group Header">
      <fd-menu-item value="2-1">Option 4</fd-menu-item>
      <fd-menu-item value="2-2">Option 5</fd-menu-item>
      <fd-menu-item value="2-3">Option 6</fd-menu-item>
    </fd-menu-list>
  </fd-menu>
</template>

<script>
export default {
  methods: {
    sayHi({ value }) {
      alert(`Hi >>${value}<<`);
    }
  }
};
</script>
