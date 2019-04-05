<title>Minimal Shell Bar</title>
<tip>This example shows the minimum Shellbar for a single application product with only user settings. If no user thumbnail is available then display initials.</tip>

<template>
  <div>
    <FdShellBar>
      <FdShellBarGroup position="start">
        <FdShellBarLogo
          alt="SAP"
          src="/images/sap-logo.png"
          srcset="/images/sap-logo@2x.png 1x, /images/sap-logo@3x.png 2x, /images/sap-logo@4x.png 3x"
          width="48"
          height="24"
        />
        <FdShellBarProduct productTitle="Product Name" />
      </FdShellBarGroup>
      <FdShellBarGroup position="end">
        <FdShellBarActions>
          <FdShellBarAction>
            <FdShellBarUserMenu>
              <FdMenuItem>Settings</FdMenuItem>
              <FdMenuItem>Sign out</FdMenuItem>
            </FdShellBarUserMenu>
          </FdShellBarAction>
        </FdShellBarActions>
      </FdShellBarGroup>
    </FdShellBar>
  </div>
</template>
