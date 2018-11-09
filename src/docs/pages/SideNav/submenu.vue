<template>
  <vf-side-nav>
    <vf-side-nav-list :value="activeId" @select="handleSelect" header="Group Title">
      <vf-side-nav-item itemId="1">Link Item 3</vf-side-nav-item>
      <vf-side-nav-submenu itemId="2" title="Link Item Submenu">
          <vf-side-nav-subitem itemId="2-1">Link Item 3</vf-side-nav-subitem>
          <vf-side-nav-subitem itemId="2-2">Link Item 3</vf-side-nav-subitem>
      </vf-side-nav-submenu>
    </vf-side-nav-list>

  </vf-side-nav>
</template>

<script>
export default {
  data() {
    return {
      activeId: '1',
    };
  },
  methods: {
    handleSelect(item) {
      this.activeId = item.itemId;
    },
  },
};
</script>