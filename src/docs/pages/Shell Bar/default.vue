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
                <FdShellBarProductSwitcherItem href="#" src="/images/products/01.png" title="Fiori Home"/>
                <FdShellBarProductSwitcherItem href="#" src="/images/products/02.png" title="S/4 HANA Cloud"/>
                <FdShellBarProductSwitcherItem href="#" src="/images/products/03.png" title="Analytics Cloud"/>
                <FdShellBarProductSwitcherItem :to="{path:'/test'}" src="/images/products/04.png" title="Ariba"/>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/05.png" title="SuccessFactors"/>
                <FdShellBarProductSwitcherItem :to="{path:'/'}" src="/images/products/06.png" title="Commerce Cloud"/>
                <FdShellBarProductSwitcherItem src="/images/products/07.png" title="Gigya"/>
                <FdShellBarProductSwitcherItem src="/images/products/08.png" title="Callidus Cloud"/>
                <FdShellBarProductSwitcherItem src="/images/products/09.png" title="Fieldglass"/>
                <FdShellBarProductSwitcherItem>
                  <router-link :to="{path:'/'}">
                    <FdShellBarProductSwitcherItemImg src="/images/products/10.png"/>
                    <FdShellBarProductSwitcherItemTitle>Concur</FdShellBarProductSwitcherItemTitle>
                  </router-link>
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem src="/images/products/11.png">
                  <router-link :to="{path:'/'}">
                    <FdShellBarProductSwitcherItemImg src="/images/products/11.png"/>
                    <FdShellBarProductSwitcherItemTitle>Cloud for Customer</FdShellBarProductSwitcherItemTitle>
                  </router-link>
                </FdShellBarProductSwitcherItem>
                <FdShellBarProductSwitcherItem>
                  <router-link :to="{path:'/'}">
                    <FdShellBarProductSwitcherItemImg src="/images/products/12.png"/>
                    <FdShellBarProductSwitcherItemTitle>Cloud Portal</FdShellBarProductSwitcherItemTitle>
                  </router-link>
                </FdShellBarProductSwitcherItem>
              </FdShellBarProductSwitcher>
            </FdShellBarAction>
          </FdShellBarActions>
        </FdShellBarGroup>
      </FdShellBar>
    </FdShellHeader>
  </FdShell>
</template>
