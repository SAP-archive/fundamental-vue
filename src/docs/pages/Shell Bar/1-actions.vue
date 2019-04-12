<title>Shell Bar with additional Actions</title>
<tip>Use `FdShellBarActionButton` to add additional action buttons to the shell bar.</tip>

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
            <FdShellBarActionButton icon="sys-help" />
          </FdShellBarAction>
          <FdShellBarAction>
            <FdShellBarActionButton icon="settings" />
          </FdShellBarAction>
          <FdShellBarAction>
            <FdShellBarUserMenu>
              <FdMenu>
                <FdMenuList>
                  <FdMenuItem>
                    Settings
                  </FdMenuItem>
                  <FdMenuItem>
                    Sign out
                  </FdMenuItem>
                </FdMenuList>
              </FdMenu>
            </FdShellBarUserMenu>
          </FdShellBarAction>
        </FdShellBarActions>
      </FdShellBarGroup>
    </FdShellBar>
  </div>
</template>
