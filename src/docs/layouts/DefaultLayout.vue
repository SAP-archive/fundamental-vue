<template>
  <Shell>
    <ShellHeader fixed>
      <ShellBar>
        <ShellBarGroup position="start">
          <ShellBarLogo
            src="/images/logo.png"
            srcset="/images/logo.png 1x, /images/logo@2x.png 2x"
          />
          <ShellBarProduct>Fundamental Vue</ShellBarProduct>
        </ShellBarGroup>
        <ShellBarGroup position="end">
          <ShellBarActions>
            <ShellBarAction>
              <ShellBarUserMenu>
                <MenuItem>
                  <a
                    href="https://github.com/SAP/fundamental-vue/issues/new"
                    target="_blank"
                  >Report an Issue</a>
                </MenuItem>
              </ShellBarUserMenu>
            </ShellBarAction>
          </ShellBarActions>
        </ShellBarGroup>
      </ShellBar>
    </ShellHeader>
    <App>
      <AppNavigation orientation="vertical" class="sidebar">
        <FdSideNav
          mode='router'
          style="padding-bottom': 25px;"
          selectedId.sync="activeNavItemId"
        >
          <FdSideNavList :items="staticMenuItems" />
          <FdSideNavGroup>
            <FdSideNavGroupTitle>Examples</FdSideNavGroupTitle>
            <FdSideNavList
              :items="exampleCollectionsMenuItems"
              style='margin-bottom: 60px;'
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
      </AppNavigation>
      <AppMain class="main-with-sidebar">
        <router-view/>
      </AppMain>
    </App>
  </Shell>
</template>

<script lang="ts">
import Vue from "vue";
import {
  Shell,
  ShellHeader,
  App,
  AppMain,
  AppNavigation,
  SideNav,
  SideNavList,
  SideNavGroup,
  SideNavGroupTitle,
  ShellBar,
  ShellBarGroup,
  ShellBarLogo,
  ShellBarActions,
  ShellBarAction,
  ShellBarUserMenu,
  ShellBarProduct,
  MenuItem,
  Identifier,
  SideNavListItem
} from "@/components";

// type ComponentState = {
//   title: string;
//   icon: string;
//   color: Color;
// };

// interface ExampleItem extends SideNavListItem {
//   componentState: ComponentState;
// }

// const componentStateMapping: { [state: string]: ComponentState } = {
//   stable: {
//     title: "Safe to use, no major updates planned.",
//     color: "accent-8",
//     icon: "thumb-up"
//   },
//   experimental: {
//     title:
//       "Work-In-Progres that may be used but be prepared for changes in the future.",
//     color: "accent-1",
//     icon: "lab"
//   },
//   deprecated: {
//     title:
//       "This component should not be used and will be removed in the future.",
//     color: "accent-3",
//     icon: "cancel"
//   },
//   inprogress: {
//     title:
//       "This component is under development. Or it is being actively reviewed to be refactored, safe to use but talk to us.",
//     color: "accent-13",
//     icon: "edit"
//   }
// };

// const componentStateFrom = (raw: string): ComponentState => {
//   const state = componentStateMapping[raw];
//   if(state == null) {
//     return componentStateMapping.inprogress;
//   }
//   return state;
// };

// interface ExampleItem extends SideNavListItem {
//   // componentState: ComponentState;
// }

export default Vue.extend({
  components: {
    Shell,
    ShellHeader,
    App,
    AppMain,
    AppNavigation,
    SideNav,
    SideNavList,
    SideNavGroup,
    SideNavGroupTitle,
    ShellBar,
    ShellBarGroup,
    ShellBarLogo,
    ShellBarActions,
    ShellBarAction,
    ShellBarUserMenu,
    ShellBarProduct,
    MenuItem,
    Identifier,
  },
  computed: {
    exampleCollectionsMenuItems(): SideNavListItem[] {
      const pages = this.$docLoader.pages;
      return pages.map(page => {

        return {
          id: page.slug,
          name: page.title,
          icon: page.icon,
          to: {
            name: 'example',
            params: { slug: page.slug },
          },
        };
      });
      // const items: ExampleItem[] = pages.map(page => {
      //   // const componentState = componentStateFrom(page.status);
      //   const result = {
      //     // componentState,
      //     name: page.title,
      //     ...page,
      //     id: page.slug,
      //     to: {
      //       name: 'example',
      //       params: { slug: page.slug },
      //     },
      //     //
      //   };
      //   return result;
    // });
    // return items;
      // return exampleCollections.map(
      //   ({ title, slug, icon, componentStatus }) => {
      //     return {
      //       icon,
      //       id: slug,
      //       name: title,
      //       componentState: componentStateFrom(componentStatus),
            // to: {
            //   name: "example",
            //   params: { slug }
            // }
      //     };
      //   }
      // );
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
