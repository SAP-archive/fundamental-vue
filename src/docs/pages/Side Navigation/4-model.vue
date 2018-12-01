<title>Side Navigation with `v-model`</title>
<condensed />

<template>
<div>
  <FdSideNav v-model="active">
    <FdSideNavList header="Group Title">
      <FdSideNavItem itemId="1">Link Item 1</FdSideNavItem>
      <FdSideNavItem itemId="2">Link Item 2</FdSideNavItem>
      <FdSideNavItem itemId="3">Link Item 3</FdSideNavItem>
      <FdSideNavItem itemId="4">Link Item 4</FdSideNavItem>
    </FdSideNavList>
  </FdSideNav>

  <div class="fd-has-padding-medium">
    <FdSelect v-model="active" placeholder="Select a Side Nav Item">
      <option value="1">Link Item 1</option>
      <option value="2">Link Item 2</option>
      <option value="3">Link Item 3</option>
      <option value="4">Link Item 4</option>
    </FdSelect>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: '2',
    };
  },
  methods: {
    handleSelect(item) {
    },
  },
};
</script>