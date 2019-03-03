<template>
  <FdShell>
    <FdShellHeader fixed>
      <FdShellBar>
        <FdShellBarGroup position="start">
          <FdShellBarLogo
            src="/images/logo.png"
            srcset="/images/logo.png 1x, /images/logo@2x.png 2x"
          />
          <FdShellBarProduct>Fundamental Vue</FdShellBarProduct>
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
          <FdSideNavList>
            <FdSideNavItem
              v-for="item in staticMenuItems"
              :key="item.id"
              :icon="item.icon"
            >
              <FdSideNavLink :to="item.to">
                {{ item.name }}
              </FdSideNavLink>
            </FdSideNavItem>
          </FdSideNavList>
          <FdSideNavGroup title="Examples">
            <FdSideNavList>
              <FdSideNavItem
                v-for="exampleCollection in exampleCollectionsMenuItems"
                :key="exampleCollection.id"
                icon="exampleCollection.icon"
              >
                <FdSideNavLink :to="exampleCollection.to">
                  <FdSideNavIcon :icon="exampleCollection.icon" />
                  {{ exampleCollection.name }}
                  <FdIdentifier
                    circle
                    style="color: white; width: 20px; height: 20px;"
                    :title="exampleCollection.status.title"
                    class="fd-has-float-right"
                    :backgroundColor="
                      exampleCollection.status.color || 'accent-6'
                    "
                    size="xxs"
                    :icon="exampleCollection.status.icon"
                  />
                </FdSideNavLink>
              </FdSideNavItem>
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
import { Page } from "./../DocumentationLoader";

interface SideNavListItem {
  id: string;
  name: string;
  icon: string;
  statusIcon?: string;
  statusTitle?: string;
  to: object | string;
}

export default Vue.extend({
  computed: {
    exampleCollectionsMenuItems(): SideNavListItem[] {
      // @ts-ignore
      const pages = this.$docLoader.pages;
      return pages.map((page: Page) => {
        return {
          id: page.slug,
          status: page.status,
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
