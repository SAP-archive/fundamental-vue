<template>
  <div>
    <vf-tabs v-model="activeTab">
      <vf-tab-item label="Tab A" name="a">A tab item can contain anything…</vf-tab-item>
      <vf-tab-item label="Tab B" name="b">…you dream about. There are no limitations.</vf-tab-item>
      <vf-tab-item label="Tab C (disabled)" name="c" disabled>I am tab item C.</vf-tab-item>
      <vf-tab-item label="Tab D" name="d">I am tab item D.</vf-tab-item>
    </vf-tabs>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    Active Tab: <b>{{activeTab}}</b>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'a',
    };
  },
};
</script>