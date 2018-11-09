<template>
  <vf-side-nav>
    <vf-side-nav-list :value="activeId" @select="handleSelect">
      <vf-side-nav-item itemId="1">Link Item 1</vf-side-nav-item>
      <vf-side-nav-item itemId="2">Link Item 2</vf-side-nav-item>
      <vf-side-nav-item itemId="3">Link Item 3</vf-side-nav-item>
      <vf-side-nav-item itemId="4">Link Item 4</vf-side-nav-item>
      <vf-side-nav-item itemId="5">Link Item 5</vf-side-nav-item>
      <vf-side-nav-item itemId="6">Link Item 6</vf-side-nav-item>
    </vf-side-nav-list>
  </vf-side-nav>
</template>

<script>
export default {
  data() {
    return {
      activeId: '3',
    };
  },
  methods: {
    handleSelect(item) {
      this.activeId = item.itemId;
    },
  },
};
</script>