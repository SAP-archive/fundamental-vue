<template>
  <vf-menu @select="sayHi">
    <vf-menu-list>
      <vf-menu-item>Option 1</vf-menu-item>
      <vf-menu-item>Option 2</vf-menu-item>
      <vf-menu-item>Option 3</vf-menu-item>
      <vf-menu-item>Option 4</vf-menu-item>
    </vf-menu-list>
  </vf-menu>
</template>

<script>
export default {
  methods: {
    sayHi(value) { alert(`Hi >>${value}<<`); },
  },
};
</script>