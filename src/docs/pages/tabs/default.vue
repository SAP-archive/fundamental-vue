<template>
  <div>
    <FdTabs v-model="activeTab">
      <FdTabItem label="Tab A" name="a">
        A tab item can contain anything…
      </FdTabItem>

      <FdTabItem label="Tab B" name="b">
        …you dream about. There are no limitations.
      </FdTabItem>

      <FdTabItem label="Tab C (disabled)" name="c" disabled>
        I am tab item C.
      </FdTabItem>

      <FdTabItem label="Tab D" name="d">
        I am tab item D.
      </FdTabItem>
    </FdTabs>

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
  data: () => ({ activeTab: 'a' })
}
</script>
