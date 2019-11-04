<template>
  <fd-context-menu>
    <template #button="{toggleContextMenu}">
      <fd-context-button styling="emphasized" :icon="null" @click="toggleContextMenu">
        More…
      </fd-context-button>
    </template>
    <fd-menu-list>
      <FdMenuItem>New File</FdMenuItem>
      <FdMenuItem>New Window</FdMenuItem>
      <FdMenuItem>About Fundamental Vue</FdMenuItem>
      <FdMenuItem>Check for Updates…</FdMenuItem>
    </fd-menu-list>
  </fd-context-menu>
</template>
