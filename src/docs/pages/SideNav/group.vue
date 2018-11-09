<template>
  <vf-side-nav>
    <vf-side-nav-list header="Group Title" :value="activeId" @select="handleSelect">
      <vf-side-nav-item itemId="1-1">Link Item 1</vf-side-nav-item>
      <vf-side-nav-item itemId="1-2">Link Item 2</vf-side-nav-item>
      <vf-side-nav-item itemId="1-3">Link Item 3</vf-side-nav-item>
      <vf-side-nav-item itemId="1-4">Link Item 4</vf-side-nav-item>
    </vf-side-nav-list>
    <vf-side-nav-list header="Group Title" :value="activeId" @select="handleSelect">
      <vf-side-nav-item itemId="2-1">Link Item 1</vf-side-nav-item>
      <vf-side-nav-item itemId="2-2">Link Item 2</vf-side-nav-item>
      <vf-side-nav-item itemId="2-3">Link Item 3</vf-side-nav-item>
      <vf-side-nav-item itemId="2-4">Link Item 4</vf-side-nav-item>
    </vf-side-nav-list>
  </vf-side-nav>
</template>

<script>
export default {
  data() {
    return {
      activeId: '1-2',
    };
  },
  methods: {
    handleSelect(item) {
      this.activeId = item.itemId;
    },
  },
};
</script>