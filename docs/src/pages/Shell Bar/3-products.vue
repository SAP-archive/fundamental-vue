<title>Shell Bar with Product Switcher</title>
<tip>You have to embed a `FdShellBar` in a `FdShell` for things to work properly.</tip>

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
        <FdShellBarProduct>
          <FdShellBarProductMenu>
            <template #title
              >Product Name</template
            >
            <template #menu>
              <FdMenuItem>Application A</FdMenuItem>
              <FdMenuItem>Application B</FdMenuItem>
            </template>
          </FdShellBarProductMenu>
        </FdShellBarProduct>
        <FdShellBarSubtitle>Subtitle</FdShellBarSubtitle>
      </FdShellBarGroup>
      <FdShellBarGroup position="end">
        <FdShellBarActions>
          <FdShellBarAction>
            <FdShellBarProductSwitcher>
              <FdShellBarProductSwitcherItem
                href="#"
                src="/images/products/01.png"
                title="Fiori Home"
              />
              <FdShellBarProductSwitcherItem
                href="#"
                src="/images/products/02.png"
                title="S/4 HANA Cloud"
              />
              <FdShellBarProductSwitcherItem
                href="#"
                src="/images/products/03.png"
                title="Analytics Cloud"
              />
              <FdShellBarProductSwitcherItem
                :to="{ path: '/test' }"
                src="/images/products/04.png"
                title="Ariba"
              />
              <FdShellBarProductSwitcherItem
                :to="{ path: '/' }"
                src="/images/products/05.png"
                title="SuccessFactors"
              />
              <FdShellBarProductSwitcherItem
                :to="{ path: '/' }"
                src="/images/products/06.png"
                title="Commerce Cloud"
              />
              <FdShellBarProductSwitcherItem
                src="/images/products/07.png"
                title="Gigya"
              />
              <FdShellBarProductSwitcherItem
                src="/images/products/08.png"
                title="Callidus Cloud"
              />
              <FdShellBarProductSwitcherItem
                src="/images/products/09.png"
                title="Fieldglass"
              />
              <FdShellBarProductSwitcherItem>
                <router-link :to="{ path: '/' }">
                  <FdShellBarProductSwitcherItemImg
                    src="/images/products/10.png"
                  />
                  <FdShellBarProductSwitcherItemTitle
                    >Concur</FdShellBarProductSwitcherItemTitle
                  >
                </router-link>
              </FdShellBarProductSwitcherItem>
              <FdShellBarProductSwitcherItem src="/images/products/11.png">
                <router-link :to="{ path: '/' }">
                  <FdShellBarProductSwitcherItemImg
                    src="/images/products/11.png"
                  />
                  <FdShellBarProductSwitcherItemTitle
                    >Cloud for Customer</FdShellBarProductSwitcherItemTitle
                  >
                </router-link>
              </FdShellBarProductSwitcherItem>
              <FdShellBarProductSwitcherItem>
                <router-link :to="{ path: '/' }">
                  <FdShellBarProductSwitcherItemImg
                    src="/images/products/12.png"
                  />
                  <FdShellBarProductSwitcherItemTitle
                    >Cloud Portal</FdShellBarProductSwitcherItemTitle
                  >
                </router-link>
              </FdShellBarProductSwitcherItem>
            </FdShellBarProductSwitcher>
          </FdShellBarAction>
        </FdShellBarActions>
      </FdShellBarGroup>
    </FdShellBar>
  </div>
</template>
