<template>
  <div class="theme-container">
    <div
      :class="sidebarClasses"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <fd-shell-header fixed>
        <d-shell-bar>
          <fd-button
            @click.prevent.stop="toggleSidebar"
            :aria-pressed="String(isSidebarOpen)"
            slot="toggle"
            type="standard"
            class="shell-bar__sidenav-toggle"
            icon="menu2"
          />
        </d-shell-bar>
      </fd-shell-header>
      <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

      <div class="sidebar">
        <d-side-nav
          @click.native="toggleSidebar(false)"
          :selectedId.sync="activeNavItemId"
          :examplePages="$_examplePages"
        />
      </div>
      <div data-fd-main-content class="page">
        <div class="content">
          <Content />
            <h2 v-if="$_relatedComponentNames.length > 0">Related Components</h2>
            <ul v-if="$_relatedComponentNames.length > 0" class="example-collection__related-components">
              <li
                class="example-collection__related-component-list-item"
                v-for="name in $_relatedComponentNames"
                :key="name"
              >
                <d-component-api-link :component-name="name" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DSideNav from "./components/side-nav.vue";
import DShellBar from "./components/shell-bar.vue";

export default {
  components: { DShellBar, DSideNav },
  computed: {
    $_relatedComponentNames() {
      // return [];
      return this.$frontmatter.fdRelatedComponents || [];
    },
    $_pagePaths() {
      const paths = this.$site.pages.map(({ relativePath }) => relativePath);
      return paths;
    },
    $_examplePages() {
      const result = [];
      this.$site.pages.forEach(page => {
        const { relativePath } = page;
        // relativePath is optional
        if (relativePath == null) {
          return;
        }

        // relativePath:
        //   it looks like this:
        //     - examples/action-bar.md
        //   We want to find relativePaths that begin with "examples/"
        //   and end with "*.md"
        const isEntry =
          relativePath.startsWith("examples/") && relativePath.endsWith(".md");
        if (isEntry) {
          result.push(page);
          return;
        }
      });
      return result;
    },
    $_allExamplePaths() {
      return this.$_pagePaths.filter(path => path.startsWith("examples/"));
    },
    $_exampleDirectories() {
      const paths = this.$_allExamplePaths;

      const allDirNames = paths.map(path => {
        const components = path.split("/");
        if (components.length < 2) {
          return "";
        }
        const [, dirName] = components;
        return dirName;
      });
      return Array.from(new Set(allDirNames));
    },
    sidebarClasses() {
      return {
        "sidebar--open": this.isSidebarOpen
      };
    }
  },
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },
    onTouchStart({ changedTouches }) {
      const [touch] = changedTouches;
      this.touchStart = {
        x: touch.clientX,
        y: touch.clientY
      };
    },
    onTouchEnd(event) {
      const { changedTouches } = event;
      const [touch] = changedTouches;
      const { clientX, clientY } = touch;
      const { touchStart } = this;
      const dx = clientX - touchStart.x;
      const dy = clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 44) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    }
  },
  data() {
    return {
      isSidebarOpen: false,
      activeNavItemId: ""
    };
  }
};
</script>

<style lang="scss">
// Support for fd-virtualized-list
@import "./../../../node_modules/vue-virtual-scroller/dist/vue-virtual-scroller.css";

@mixin for-compact-only {
  @media (max-width: 705px) {
    @content;
  }
}

body {
  background-color: white;
}
.content__default {
  font-size: 16px;
  line-height: 28px;
}

.content__default {
  p > code {
    background-color: rgba(27, 31, 35, 0.05);
    font-size: 0.85rem;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
  }
  li > code {
    background-color: rgba(27, 31, 35, 0.05);
    font-size: 0.85rem;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
  }
}

.content__default {
  & > h1 {
    margin-bottom: 50px;
    margin-top: 50px;
  }
  & > h2 {
    margin-bottom: 30px;
    margin-top: 40px;
  }
  & > h3 {
    margin-bottom: 20px;
    margin-top: 40px;
  }
  & > h4 {
    margin-bottom: 15px;
    margin-top: 40px;
  }
  & > ol {
    margin-left: 15px;
    li {
      margin-left: 15px;
    }
  }
  & > ul {
    margin-left: 15px;
    li {
      margin-left: 15px;
    }
  }
}

.shell-bar__sidenav-toggle {
  margin-left: -10px;
  margin-right: 10px;
  color: #fff;
  border: none;
  background-color: rgb(53, 74, 95);
  display: none;

  &[aria-pressed="true"] {
    color: white;
    background-color: black;
    border: none;
  }

  &:hover {
    background-color: black;
  }
  @include for-compact-only {
    display: inline-block;
  }
}

.sidebar-mask {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background-color: rgb(0, 0, 0);
  opacity: 0;
  animation: fadeInFromNone 0.5s ease-out;
  animation-fill-mode: forwards;
}

@keyframes fadeInFromNone {
  0% {
    display: none;
    opacity: 0;
    background-color: black;
  }

  1% {
    display: block;
    opacity: 0;
    background-color: black;
  }

  100% {
    display: block;
    opacity: 0.2;
    background-color: black;
  }
}

$sidebar-width: 250px;

.sidebar {
  margin: 0;
  padding: 0;
  width: $sidebar-width;
  background-color: #f1f1f1;
  position: fixed;
  top: 48px;
  height: 100%;
  overflow: auto;
  z-index: 10;
  transition: transform 0.33s ease;
  border-right: 1px solid #efefef;
}

$insetSide: 20px;
$insetSide-compact: 16px;
.page {
  padding-left: $sidebar-width;
  padding-top: calc(44px);
  top: 44px;
  @include for-compact-only {
    padding-left: 0;
    padding-right: 0;
    padding-top: calc(44px + 16px);
    width: 100%;
  }
}

.content {
  max-width: calc(740px);
  margin: 0 auto;
  padding: 2rem;
}

.sidebar--open .sidebar {
  transition: transform 0.2s ease;
}
@include for-compact-only {
  .content {
    margin-left: 0;
  }
  .sidebar--open .sidebar {
    transform: translateX(0);
  }
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar--open .sidebar-mask {
    display: block;
  }
}
</style>

<style>
.example-collection__related-components-title {
  font-weight: heavy;
}
.example-collection__related-components {
  margin-left: 15px;
}
</style>
