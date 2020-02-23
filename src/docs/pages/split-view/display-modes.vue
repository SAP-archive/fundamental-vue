<template>
  <div>
    <div v-fd-margin:medium.bottom>
      <FdButtonGroup v-model="displayMode" selectionMode="single" :allowsEmptySelection="false">
        <FdButtonGroupButton value="side-by-side">Side-by-Side</FdButtonGroupButton>
        <FdButtonGroupButton value="hidden">Hidden</FdButtonGroupButton>
        <FdButtonGroupButton value="overlay">Overlay</FdButtonGroupButton>
      </FdButtonGroup>
    </div>

    <FdSplitView :displayMode="displayMode" height="200px">
      <template #master>
        <FdSplitViewMaster>
          <FdList borderless>
            <FdVirtualizedList :minItemSize="10" :items="items" keyField="id">
              <template #item="{ item, index }">
                <FdListItem
                  :active="item.id === selectedItem.id"
                  @click.native="listItemClick(item)"
                >
                  <FdListTitle>#{{ index }} {{ item.text }}</FdListTitle>
                </FdListItem>
              </template>
            </FdVirtualizedList>
          </FdList>
        </FdSplitViewMaster>
      </template>
      <template #detail>
        <FdSplitViewDetail>
          <FdVirtualizedList
            style="height: 100%;"
            :minItemSize="1000"
            :items="[selectedItem]"
            keyField="id"
          >
            <template #item="{ item }">
              <div style="height: 1000px;">{{ item }}</div>
            </template>
          </FdVirtualizedList>
        </FdSplitViewDetail>
      </template>
    </FdSplitView>
  </div>
</template>

<script>
const makeItems = () => {
  const items = []
  for (let i = 0; i < 100; i++) {
    items.push({ id: String(i), text: `AC-COB${i}` })
  }
  return items
}

export default {
  methods: {
    listItemClick(item) {
      this.selectedItem = item
    }
  },
  data() {
    return {
      displayMode: 'side-by-side',
      selectedItem: {
        id: null,
        text: null
      },
      items: makeItems()
    }
  }
}
</script>
