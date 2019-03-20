<template>
  <FdShell>
    <FdShellHeader fixed>
      <FdShellBar>
        <FdShellBarGroup position="start">
          <FdShellBarLogo
            src="/fundamental-vue/images/logo.png"
            srcset="/fundamental-vue/images/logo.png 1x, /fundamental-vue/images/logo@2x.png 2x"
          />
          <FdShellBarProduct>
            <FdShellBarProductTitle>Fundamental Vue</FdShellBarProductTitle>
          </FdShellBarProduct>
        </FdShellBarGroup>
        <FdShellBarGroup position="end">
          <FdShellBarActions>
            <FdShellBarAction>
              <FdShellBarUserMenu>
                <FdMenuItem>
                  <a
                    href="https://github.com/SAP/fundamental-vue/issues/new"
                    target="_blank"
                    >Report an Issue</a
                  >
                </FdMenuItem>
              </FdShellBarUserMenu>
            </FdShellBarAction>
          </FdShellBarActions>
        </FdShellBarGroup>
      </FdShellBar>
    </FdShellHeader>
    <FdApp>
      <FdAppNavigation orientation="vertical" class="sidebar">
        <FdSideNav
          mode="router"
          style="padding-bottom': 25px;"
          selectedId.sync="activeNavItemId"
        >
          <FdSideNavList :items="staticMenuItems" />
          <FdSideNavGroup>
            <FdSideNavGroupTitle>Examples</FdSideNavGroupTitle>
            <FdSideNavList
              :items="exampleCollectionsMenuItems"
              style="margin-bottom: 60px;"
            >
              <!-- <template slot="afterLinkText" slot-scope="exampleItem">
              <Identifier
                style="width: 20px; height: 20px;"
                :title="exampleItem.componentState.title"
                circle
                class="fd-has-float-right"
                :backgroundColor="exampleItem.componentState.color || 'accent-6'"
                size="xss"
                :icon="exampleItem.componentState.icon"
              />

              </template> -->
            </FdSideNavList>
          </FdSideNavGroup>
        </FdSideNav>
      </FdAppNavigation>
      <FdAppMain class="main-with-sidebar">
        <router-view />
      </FdAppMain>
    </FdApp>
  </FdShell>
</template>

<script lang="ts">
import Vue from "vue";

interface SideNavListItem {
  id: string;
  name: string;
  icon: string;
  to: object | string;
}

export default Vue.extend({
  computed: {
    exampleCollectionsMenuItems(): SideNavListItem[] {
      const pages = this.$docLoader.pages;
      return pages.map(page => {
        return {
          id: page.slug,
          name: page.title,
          icon: page.icon,
          to: {
            name: "example",
            params: { slug: page.slug }
          }
        };
      });
    },
    staticMenuItems(): SideNavListItem[] {
      return [
        { id: "start", name: "Start", icon: "home", to: "/start" },
        {
          id: "new-component",
          name: "New Component Guide",
          icon: "write-new",
          to: "/guide/new-component"
        }
      ];
    }
  },
  data() {
    return {
      activeNavItemId: "./Action Bar/index.ts"
    };
  }
});
</script>

<style lang="sass" scoped>
$navbar-height: 48px
$navbar-vertical-padding: 0px
$logo-height: $navbar-height - 0px
$border-color: #d9d9d9

.sidebar
  font-size: 15px
  width: 250px
  position: fixed
  z-index: 10
  top: $navbar-height
  left: 0
  box-sizing: border-box
  overflow-y: auto
  min-width: 250px
  border-right: 1px solid #d9d9d9

.main-with-sidebar
  position: absolute
  left: 250px
  top: 0
  right: 0
  background-color: white;

body
  background-color: white;
</style>
