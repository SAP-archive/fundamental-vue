<template>
  <fd-master-details
    :master-items="items"
    :use-virtualized-list="true"
    :auto-open-modal="true"
    :mobile-breakpoints="'(max-width: 700px)'"
    :mobile-modal-styles="mobileModalStyles"
    :virtualized-list-props="optsOverrides"
    style="max-height: 600px;"
  >
    <template #top-bar>
      <fd-action-bar>
        <template #header>
          <fd-action-bar-header>
            <template #title>
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
          </fd-action-bar-header>
        </template>
      </fd-action-bar>
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
    <template v-slot:master-list-item="{ item, index }"
      >Item #{{ index }}</template
    >
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
    },
    mobileModalStyles() {
      return {
        width: "90%",
        height: "80%"
      };
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
