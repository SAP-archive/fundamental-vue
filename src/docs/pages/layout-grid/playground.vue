<template>
  <div>
    <FdContainer flex>
      <FdCol>
        <FdFieldset>
          <FdFieldsetLegend>Number of Columns</FdFieldsetLegend>
          <FdFormItem inline>
            <FdButton
              :disabled="numberOfColumns <= 1"
              @click="decreaseColCount"
              styling="light"
              icon="sys-minus"
            />
            {{ numberOfColumns }}
            <FdButton
              :disabled="numberOfColumns >= 6"
              @click="increaseColCount"
              styling="light"
              icon="sys-add"
            />
          </FdFormItem>
        </FdFieldset>
        <FdFieldset>
          <FdFieldsetLegend>Gap Settings</FdFieldsetLegend>
          <FdFormItem inline>
            <FdSelect v-model="gapMode">
              <option value="default">default</option>
              <option value="none">gap=none</option>
              <option value="1">gap=1</option>
            </FdSelect>
          </FdFormItem>
        </FdFieldset>
      </FdCol>
      <FdCol>
        <FdFieldset>
          <FdFormItem>
            <FdFormLabel>Selected Item</FdFormLabel>
            {{ selectedItem }}
          </FdFormItem>
        </FdFieldset>
        <FdFieldset>
          <FdFormItem>
            <FdFormLabel>Span</FdFormLabel>
            <SpanSelector :value="selectedItem.span" @update:value="selectedItem.span = $event" />
          </FdFormItem>
        </FdFieldset>
        <FdFieldset>
          <FdFieldsetLegend>Actions</FdFieldsetLegend>

          <FdFormItem>
            <FdButtonGroup compact>
              <FdButtonGroupButton :disabled="selectedItem.id == null" @click="addBefore" icon="add"
                >Add Before</FdButtonGroupButton
              >
              <FdButtonGroupButton
                :disabled="selectedItem.id == null"
                @click="deleteSelected"
                icon="delete"
                >Delete</FdButtonGroupButton
              >
              <FdButtonGroupButton :disabled="selectedItem.id == null" @click="addAfter" icon="add"
                >Add After</FdButtonGroupButton
              >
            </FdButtonGroup>
          </FdFormItem>
        </FdFieldset>
      </FdCol>
    </FdContainer>

    <FdLayoutGrid :gap="gap" :col="numberOfColumns">
      <FdLayoutGridItem
        style="cursor:pointer;"
        @click.native="selectItem(item)"
        class="fdd-layout-grid-item-playground"
        :class="gridItemClassesForItem(item)"
        :span="item.span"
        v-for="item in items"
        :key="item.id"
      >
        <div class="fdd-layout-grid-item-playground-title">Item #{{ item.id }}</div>
        <!-- <div>
          <FdButton
            compact
            :disabled="item.span <= 2"
            @click="decreaseSpan(item)"
            styling="light"
            icon="sys-minus"
          />
          Span {{ item.span || 'null' }}
          <FdButton
            compact
            :disabled="item.span >= 6"
            @click="increaseSpan(item)"
            styling="light"
            icon="sys-add"
          />
        </div> -->
      </FdLayoutGridItem>
    </FdLayoutGrid>
  </div>
</template>

<script>
const SpanSelector = {
  props: {
    value: {
      type: Number,
      default: null
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.value_ = value
      }
    }
  },
  render(h) {
    const on = {
      update: value => {
        if (value == 'none') {
          this.$emit('update:value', null)
          this.value_ = null
        } else {
          const numberValue = Number.parseInt(value, 10)
          this.$emit('update:value', numberValue)
          this.value_ = numberValue
        }
      }
    }
    const props = {
      value: this.value_
    }

    return h('FdSelect', { on, props }, [
      h('option', { value: 'none' }, 'none'),
      h('option', { value: '2' }, '2'),
      h('option', { value: '3' }, '3'),
      h('option', { value: '4' }, '4'),
      h('option', { value: '5' }, '5')
    ])
  },
  data() {
    return {
      value_: this.value
    }
  }
}
export default {
  components: { SpanSelector },
  computed: {
    increateColCountDisabled() {
      return this.numberOfColumns >= 6
    },
    gap() {
      const { gapMode } = this
      if (gapMode === 'default') {
        return null
      }
      return gapMode
    }
  },
  methods: {
    gridItemClassesForItem(item) {
      if (item.id === this.selectedItem.id) {
        return 'fdd-layout-grid-item-playground--selected'
      }
      return null
    },
    selectItem(item) {
      this.selectedItem = item
    },
    increaseColCount() {
      this.numberOfColumns = this.numberOfColumns + 1
    },
    decreaseColCount() {
      this.numberOfColumns = this.numberOfColumns - 1
    },
    deleteSelected() {
      if (this.selectedItem.id == null) {
        return
      }
      const index = this.items.findIndex(({ id }) => id === this.selectedItem.id)
      const newItems = [...this.items]
      newItems.splice(index, 1)
      this.items = newItems
      const newIndex = Math.max(0, index - 1)
      if (this.items.length > 0) {
        this.selectedItem = this.items[newIndex]
      } else {
        this.selectedItem = { id: null, span: null }
      }
    },
    addAfter() {
      const index = Math.min(
        this.items.findIndex(({ id }) => id === this.selectedItem.id) + 1,
        this.items.length - 1
      )
      const id = this.lastItemId + 1
      this.lastItemId = id
      const newItems = [...this.items]
      const newItem = { id, span: null }
      newItems.splice(index, 0, newItem)
      this.items = newItems
      this.selectedItem = newItem
    },
    addBefore() {
      const index = Math.max(this.items.findIndex(({ id }) => id === this.selectedItem.id) - 1, 0)
      const id = this.lastItemId + 1
      this.lastItemId = id
      const newItems = [...this.items]
      const newItem = { id, span: null }
      newItems.splice(index, 0, newItem)
      this.items = newItems
      this.selectedItem = newItem
    },
    increaseSpan(item) {
      const { span } = item
      if (span == null) {
        item.span = 2
      } else {
        item.span = item.span + 1
      }
    },
    decreaseSpan(item) {
      const { span } = item
      if (span == null) {
        item.span = 2
      } else {
        item.span = item.span - 1
      }
    }
  },
  data() {
    return {
      selectedItem: {
        span: null,
        id: null
      },
      numberOfColumns: 3,
      gapMode: 'default',
      lastItemId: 20,
      items: Array.from({ length: 20 }).map((_, index) => ({
        span: null,
        id: String(index)
      }))
    }
  }
}
</script>

<style scoped>
.fdd-layout-grid-item-playground {
  background-color: #fefefe;
  border: 1px solid #cccccc;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.fdd-layout-grid-item-playground--selected {
  background-color: #d0eaff;
  border: 1px solid #7181a5;
}
.fdd-layout-grid-item-playground-title {
  font-size: 1rem;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
