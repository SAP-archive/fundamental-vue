<template>
  <fd-master-details
    :master-items="items"
    :fullscreen="true"
    :virtualized-list-props="optsOverrides"
    :use-virtualized-list="true"
  >
    <template #top-bar>
      <fd-shell-bar>
        <fd-shell-bar-group position="start">
          <fd-shell-bar-logo
            alt="SAP"
            :src="$withBase('images/sap-logo.png')"
            :srcset="srcset"
            width="48"
            height="24"
          />
          <fd-shell-bar-product productTitle="Top bar" />
        </fd-shell-bar-group>
        <fd-shell-bar-group position="end">
          <fd-shell-bar-actions>
            <fd-shell-bar-action>
              <fd-shell-bar-user-menu ref="userMenu">
                <fd-menu>
                  <fd-menu-list>
                    <fd-menu-item>Settings</fd-menu-item>
                    <fd-menu-item>Sign out</fd-menu-item>
                  </fd-menu-list>
                </fd-menu>
              </fd-shell-bar-user-menu>
            </fd-shell-bar-action>
          </fd-shell-bar-actions>
        </fd-shell-bar-group>
      </fd-shell-bar>
    </template>
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
    <!-- <template v-slot:master-list-item="{ item, index }">
      Item #{{ index }}
    </template> -->
    <template #details-title="{ item }">
      <fd-action-bar>
        <template #header>
          <fd-action-bar-header>
            <template #title>
              <fd-action-bar-title>Details</fd-action-bar-title>
            </template>
            <template #description>
              <fd-action-bar-description>Description</fd-action-bar-description>
            </template>
          </fd-action-bar-header>
        </template>
        <template v-if="item" #actions>
          <fd-action-bar-actions>
            <fd-button type="positive" icon="edit">Edit</fd-button>
            <fd-button type="negative" icon="delete">Delete</fd-button>
          </fd-action-bar-actions>
        </template>
      </fd-action-bar>
    </template>
    <template #details-content="{ item }">
      <fd-panel :title="`#${item.id}`" :description="`Details about ${item.value}`"></fd-panel>
    </template>
    <template #details-content-placeholder>
      <div class="empty">
        <div class="emtpty-image">
          <img :src="$withBase('images/no-data.svg')" alt="details content placeholder" />
        </div>
        <p>Placeholder</p>
      </div>
    </template>
  </fd-master-details>
</template>

<script>
export default {
  computed: {
    srcset() {
      return [
        `${this.$withBase("images/sap-logo@2x.png")} 2x`,
        `${this.$withBase("images/sap-logo@3x.png")} 3x`,
        `${this.$withBase("images/sap-logo@4x.png")} 4x`
      ].join(", ");
    }
  },
  data() {
    return {
      items: this.makeItems(),
      optsOverrides: {
        loadMoreItems: done => {
          this.items = this.items.concat(...this.makeItems(this.items[this.items.length - 1].id));
          done();
        },
        totalItemCount: 500
      },
      routerItems: [
        { name: "Item 1" },
        { name: "Item 2" },
        {
          name: "Item 3",
          children: [{ name: "Item 3-1" }, { name: "Item 3-2" }, { name: "Item 3-3" }]
        },
        { name: "Item 4" },
        { name: "Item 5" }
      ]
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

<style lang="scss">
.empty {
  margin: 0 8px;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
.empty-image {
  height: 100px;
  margin-bottom: 8px;
}

.empty-image img {
  height: 100%;
  vertical-align: middle;
  border-style: none;
}

.empty-description {
  margin: 0;
  padding: 0;
}
</style>
