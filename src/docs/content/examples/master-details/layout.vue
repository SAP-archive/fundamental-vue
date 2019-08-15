<template>
  <div>
    <div class="sliders">
      <p>Master width: {{ masterWidth }}%</p>
      <input v-model.number="masterWidth" type="range" min="1" max="100" />
      <p>Gap width: {{ gapWidth }}px</p>
      <input v-model.number="gapWidth" type="range" min="0" max="50" />
    </div>
    <fd-master-details
      :master-items="items"
      :master-width="`${masterWidth}%`"
      :gap="`${gapWidth}px`"
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
      <template v-slot:master-list-item="{ item, index }"
        >Item #{{ index }}</template
      >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: this.makeItems(),
      masterWidth: 50,
      gapWidth: 10
    };
  },
  methods: {
    makeItems() {
      let items = [];
      for (let i = 0; i < 100; i++) {
        items.push({ id: i, value: `AC-COB${i}` });
      }
      return items;
    }
  }
};
</script>

<style lang="scss">
.sliders,
.sliders input {
  width: 100%;
}
</style>
