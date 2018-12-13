<title>Shell Bar</title>
<fullscreen-only />
<tip>You have to embed a `FdShellBar` in a `FdShell` for things to work properly.</tip>

<template>
  <FdShell>
    <FdShellHeader>
      <FdShellBar>
        <FdShellBarGroup position="start">
          <FdShellBarLogo src="/images/logo.png" />
        <FdShellBarProduct>Product Name</FdShellBarProduct>
        </FdShellBarGroup>
        <FdShellBarGroup position="end">
          <FdShellBarActions>
            <FdShellBarAction>
              <FdShellBarUserMenu>
                <FdMenuItem>
                  <a href="#" @click.prevent='' target="_blank">Settings</a>
                </FdMenuItem>
                <FdMenuItem>
                  <a href="#" @click.prevent='' target="_blank">Sign out</a>
                </FdMenuItem>
              </FdShellBarUserMenu>
            </FdShellBarAction>
            <FdShellBarAction>
              <FdShellBarProductSwitcher>
                <FdShellBarProductSwitcherItem href="#" src="/images/products/01.png">
                  Fiori Home
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem href="#" src="/images/products/02.png">
                  S/4 HANA Cloud
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem href="#" src="/images/products/03.png">
                  Analytics Cloud
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/04.png">
                  Ariba
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/05.png">
                  SuccessFactors
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/06.png">
                  Commerce Cloud
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/07.png">
                  Gigya
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/08.png">
                  Callidus Cloud
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/09.png">
                  Fieldglass
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/10.png">
                  Concur
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/11.png">
                  Cloud for Customer
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/12.png">
                  Cloud Portal
                </FdShellBarProductSwitcherItem>
              </FdShellBarProductSwitcher>
            </FdShellBarAction>
          </FdShellBarActions>
        </FdShellBarGroup>
      </FdShellBar>
    </FdShellHeader>
  </FdShell>
</template>
