<template>
  <div id="app" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <FdShellHeader fixed>
      <ShellBar>
        <FdButton
          @click.prevent.stop="toggleSidebar"
          :aria-pressed="isSidebarOpen"
          slot="toggle"
          type="standard"
          v-show="toggleSidebarButtonVisible"
          class="shell-bar__sidenav-toggle"
          icon="menu2"
        />
      </ShellBar>
    </FdShellHeader>
    <div>
      <FdSplitView height="calc(100vh)" :displayMode="displayMode">
        <template #master>
          <FdSplitViewMaster style="margin-top:48px;">
            <StorybookButton />
            <SideNav @click.native="toggleSidebar(false)" :selectedId.sync="activeNavItemId" />
          </FdSplitViewMaster>
        </template>
        <template #detail>
          <FdSplitViewDetail data-fd-main-content style="padding-top:48px;">
            <div class="page">
              <div class="content">
                <router-view />
              </div>
            </div>
          </FdSplitViewDetail>
        </template>
      </FdSplitView>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ShellBar from './default/shell-bar.vue'
import SideNav from './default/side-nav.vue'
import { observeMediaQueries } from './../../main'
import StorybookButton from '../components/storybook-button.vue'

export default {
  components: { ShellBar, SideNav, StorybookButton },
  mixins: [
    observeMediaQueries(
      {
        compact: 'only screen and (max-width: 600px)'
        // regular: '(min-width: 500px)'
      },
      { Vue }
    )
  ],
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    onTouchStart({ changedTouches }) {
      const [touch] = changedTouches
      this.touchStart = {
        x: touch.clientX,
        y: touch.clientY
      }
    },
    onTouchEnd(event) {
      const { changedTouches } = event
      const [touch] = changedTouches
      const { clientX, clientY } = touch
      const { touchStart } = this
      const dx = clientX - touchStart.x
      const dy = clientY - touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 44) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  },
  computed: {
    toggleSidebarButtonVisible() {
      return this.displayMode !== 'side-by-side'
    },
    displayMode() {
      const { $mq, isSidebarOpen } = this
      if ($mq.compact === true) {
        return isSidebarOpen ? 'overlay' : 'hidden'
      }
      return 'side-by-side'
    }
  },
  data() {
    return {
      isSidebarOpen: false,
      activeNavItemId: './Action Bar/index.ts'
    }
  }
}
</script>
<style lang="scss">
@import './../styles/mixins';

.shell-bar__sidenav-toggle {
  margin-left: 10px;
  margin-right: 10px;
  color: #fff;
  border: none;
  background-color: rgb(53, 74, 95);
  display: inline-block;

  &[aria-pressed='true'] {
    color: white;
    background-color: black;
    border: none;
  }

  &:hover {
    background-color: black;
  }
}

$insetSide: 20px;
$insetSide-compact: 16px;
.page {
  padding-bottom: 200px; /** allow the user to scroll further down */
}

.content {
  padding: 2rem;
  background-color: #fff;
}
</style>
