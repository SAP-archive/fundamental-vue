<template>
  <fd-master-details
    :master-items="items"
    :virtualized-list-props="optsOverrides"
    :use-virtualized-list="true"
    style="max-height: 400px;"
  >
    <template #master-title>
      <fd-action-bar>
        <template #header>
          <fd-action-bar-header>
            <template #title>
              <fd-action-bar-title>Master title</fd-action-bar-title>
            </template>
          </fd-action-bar-header>
        </template>
      </fd-action-bar>
    </template>
    <template v-slot:master-list-item="{ item, index }">
      Item #{{ index }}
    </template>
    <template #details-title>
      <fd-action-bar>
        <template #header>
          <fd-action-bar-header>
            <template #title>
              <fd-action-bar-title>Details title</fd-action-bar-title>
            </template>
          </fd-action-bar-header>
        </template>
      </fd-action-bar>
    </template>
    <template v-slot:details-content="{ item }">
      <fd-panel :title="`#${item.id}`" :description="`Details about ${item.value}`"></fd-panel>
    </template>
  </fd-master-details>
</template>

<script>
export default {
  data() {
    return {
      items: this.makeItems(),
      optsOverrides: {
        loadMoreItems: done => {
          this.items = this.items.concat(...this.makeItems(this.items[this.items.length - 1].id));
          done();
        },
        totalItemCount: 500
      }
    };
  },
  methods: {
    makeItems(firstId = 0) {
      let items = [];
      for (let i = 0; i < 100; i++) {
        items.push({ id: firstId + i, value: `AC-COB${i}` });
      }
      return items;
    }
  }
};
</script>
