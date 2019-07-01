<template>
  <fd-shell>
    <template #header>
      <fd-shell-header>Header</fd-shell-header>
    </template>
    <template #app>
      <fd-shell-app>
        <fd-app>
          <template #navigation>
            <fd-app-navigation>nav</fd-app-navigation>
          </template>
          <template #main>
            <fd-app-main>
              <fd-section>main content</fd-section>
            </fd-app-main>
          </template>
        </fd-app>
      </fd-shell-app>
    </template>
  </fd-shell>
</template>
