<template>
  <div class="fdv-split-view" :style="splitViewStyles">
    <div class="fdv-split-view__master" :class="masterClasses" :style="masterStyles">
      <!-- master component -->
      <slot name="master" />
    </div>

    <div class="fdv-split-view__detail" :class="detailClasses" :style="detailStyles">
      <!-- detail component -->
      <slot name="detail" />
    </div>

    <div class="fdv-split-view__overlay" :style="overlayStyles" />
  </div>
</template>

<script>
/** @typedef {"side-by-side" | "hidden" | "overlay"} DisplayMode */

export default {
  name: 'FdSplitView',
  props: {
    height: {
      type: String,
      default: '100%'
    },
    // We have three different display modes:
    // 1. side-by-side: Both, master- and detail-components are visible.
    // 2. hidden: master is not visible – the detail component takes over the full size.
    // 3. overlay: master is layered on top of the detail component.
    displayMode: {
      type: String,
      default: 'side-by-side',
      validator: value => ['side-by-side', 'hidden', 'overlay'].indexOf(value) >= 0
    },
    masterWidth: {
      // the width of the master column it could be expressed in percentage ('70%')
      // or in pixels ('700px')
      type: String,
      default: '200px'
    }
  },
  computed: {
    masterClasses() {
      return `fdv-split-view__master--${this.displayMode}`
    },
    detailClasses() {
      return `fdv-split-view__detail--${this.displayMode}`
    },
    overlayStyles() {
      return {
        height: this.height,
        display: this.displayMode === 'overlay' ? 'block' : 'none'
      }
    },
    splitViewStyles() {
      return {
        height: this.height
      }
    },
    wrapperStyles() {
      return {}
    },
    masterStyles() {
      const styles = {
        width: this.masterWidth
      }
      if (this.displayMode === 'hidden') {
        styles.transform = `translateX(-${this.masterWidth})`
      }
      return styles
    },
    detailStyles() {
      const { displayMode, masterWidth } = this
      let width
      let left
      switch (displayMode) {
        case 'side-by-side': {
          width = `calc(100% - ${masterWidth})`
          left = this.masterWidth
          break
        }
        case 'hidden': {
          width = '100%'
          left = '0px'
          break
        }
        case 'overlay': {
          width = '100%'
          left = '0px'
          break
        }
      }
      return { width, left }
    }
  }
}
</script>

<style>
:root {
  --fdv-split-view-transition: 0.2s ease-in-out;
}

.fdv-split-view {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.fdv-split-view__overlay {
  position: absolute;
  z-index: 9;
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

/* height is set via JavaScript */
.fdv-split-view__master {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
}
.fdv-split-view__master--side-by-side {
  z-index: 10;
  transition: var(--fdv-split-view-transition);
}
.fdv-split-view__master--hidden {
  z-index: 10;
  transition: var(--fdv-split-view-transition);
}
.fdv-split-view__master--overlay {
  z-index: 10;
  transition: var(--fdv-split-view-transition);
}
.fdv-split-view__detail {
  position: absolute;
  top: 0px;
  /* left: 50px; */
  bottom: 0px;
  /* height: 200x; */
}
.fdv-split-view__detail--side-by-side {
  /* left: 50px; */
  /* width: calc(100% - 50px); */
  transition: var(--fdv-split-view-transition);
}
.fdv-split-view__detail--hidden {
  /* left: 0px;
  width: 100%; */
  transition: var(--fdv-split-view-transition);
}
.fdv-split-view__detail--overlay {
  /* left: 0px; */
  /* width: 100%; */
  transition: var(--fdv-split-view-transition);
}
</style>
