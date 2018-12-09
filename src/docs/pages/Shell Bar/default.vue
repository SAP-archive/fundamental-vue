<title>Shell Bar</title>
<fullscreen-only />
<tip>You have to embed a `FdShellBar` in a `FdShell` for things to work properly.</tip>

<template>
  <FdShell>
    <FdShellHeader>
      <FdShellBar>
        <FdShellBarGroup position="start">
          <FdShellBarLogo src="/logo.png" />
        <FdShellBarProduct>Product Name</FdShellBarProduct>
        </FdShellBarGroup>
        <FdShellBarGroup position="end">
          <FdShellBarActions>
            <FdShellBarAction>
              <FdShellBarUserMenu>
                <FdMenuItem>
                  <a href="https://github.com/SAP/fundamental-vue/issues/new" target="_blank">Report Issue</a>
                </FdMenuItem>
              </FdShellBarUserMenu>
            </FdShellBarAction>
          </FdShellBarActions>
        </FdShellBarGroup>
      </FdShellBar>
    </FdShellHeader>
  </FdShell>
</template>
