<template>
  <fd-context-menu>
    <template #button="{toggleContextMenu}">
      <fd-context-button styling="emphasized" :icon="null" @click="toggleContextMenu">
        More…
      </fd-context-button>
    </template>
    <fd-menu-list>
      <fd-menu-item>New File</fd-menu-item>
      <fd-menu-item>New Window</fd-menu-item>
      <fd-menu-item>About Fundamental Vue</fd-menu-item>
      <fd-menu-item>Check for Updates…</fd-menu-item>
    </fd-menu-list>
  </fd-context-menu>
</template>
