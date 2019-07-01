<template>
  <div>
    <fd-tabs v-model="activeTab">
      <fd-tab-item label="Tab A" name="a">
        A tab item can contain anything…
      </fd-tab-item>

      <fd-tab-item label="Tab B" name="b">
        …you dream about. There are no limitations.
      </fd-tab-item>

      <fd-tab-item label="Tab C (disabled)" name="c" disabled>
        I am tab item C.
      </fd-tab-item>

      <fd-tab-item label="Tab D" name="d">
        I am tab item D.
      </fd-tab-item>
    </fd-tabs>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />
    Active Tab:
    <b>{{ activeTab }}</b>
  </div>
</template>

<script>
export default {
  data: () => ({ activeTab: "a" })
};
</script>
