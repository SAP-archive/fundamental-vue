<title>Shell (Application-level Layout)</title>
<fullscreen-only />

<template>
  <div class="docs-component docs-component__app">
    <FdShell>
      <FdShellHeader>Header</FdShellHeader>
      <FdApp>
        <FdAppNavigation orientation="vertical">
          Navigation
        </FdAppNavigation>
        <FdAppMain>main</FdAppMain>
      </FdApp>
      <FdShellFooter>Footer</FdShellFooter>
    </FdShell>
  </div>
</template>

<style>
.docs-component {
  height: 500px;
}
.docs-component__app {
  height: 500px;
  color: white;
  position: relative;
}
.docs-component__app .fd-shell {
  width: 100%;
  max-width: 100%;
  min-height: 410px;
  max-height: 410px;
  position: relative;
}
.docs-component__app .fd-shell__app {
  height: calc(100% - 48px);
  margin-top: 0;
}
.docs-component__app .fd-app__navigation {
  height: calc(100% - 48px);
  margin-top: 48px;
}
.docs-component__app .fd-shell__app,
.docs-component__app .fd-shell,
.docs-component__app .fd-app {
  width: 100%;
  max-width: 100%;
  min-height: 410px;
  max-height: 410px;
}
.docs-component__app .fd-shell__header,
.docs-component__app .fd-app__navigation,
.docs-component__app .fd-shell__footer,
.docs-component__app .fd-app__main {
  padding: 10px;
  text-align: center;
  color: #000;
}
.docs-component__app .fd-shell__header,
.docs-component__app .fd-shell__footer {
  background-color: #d9d9d9;
}
.docs-component__app .fd-app__navigation {
  background-color: white;
}
.docs-component__app .fd-app__main {
  background-color: #fafafa;
  padding-top: 50px;
}
.docs-component__app .fd-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.docs-component__app .fd-overlay--alert .fd-alert {
  margin-top: -410px;
}
.docs-component__app .docs-component__bg-toggle {
  display: none;
}
</style>
