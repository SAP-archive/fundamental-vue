<template>
  <div id="app" :class="sidebarClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <FdShellHeader fixed>
      <ShellBar>
        <FdButton
          @click.prevent.stop="toggleSidebar"
          :aria-pressed="isSidebarOpen"
          slot="toggle"
          type="standard"
          class="shell-bar__sidenav-toggle"
          icon="menu2"
        />
      </ShellBar>
    </FdShellHeader>
    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <div class="sidebar">
      <SideNav @click.native="toggleSidebar(false)" :selectedId.sync="activeNavItemId" />
    </div>
    <div data-fd-main-content class="page">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ShellBar from "./default/ShellBar.vue";
import SideNav from "./default/SideNav.vue";

export default {
  components: { ShellBar, SideNav },
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
  computed: {
    sidebarClasses() {
      return {
        "sidebar--open": this.isSidebarOpen
      };
    }
  },
  data() {
    return {
      isSidebarOpen: false,
      activeNavItemId: "./Action Bar/index.ts"
    };
  }
};
</script>
<style lang="scss">
@import "./../styles/mixins";

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
