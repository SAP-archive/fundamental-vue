<title>Shell Bar with Product Switcher</title>
<tip>You have to embed a `FdShellBar` in a `FdShell` for things to work properly.</tip>

<template>
  <div>
    <FdShellBar>
      <FdShellBarGroup position="start">
        <FdShellBarLogo
          alt="SAP"
          :src="$withBase('images/sap-logo.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <FdShellBarProduct>
          <FdShellBarProductMenu>
            <template #title
              >Product Name</template
            >
            <template #menu>
              <FdMenu>
                <FdMenuList>
                  <FdMenuItem>
                    Application A
                  </FdMenuItem>
                  <FdMenuItem>
                    Application B
                  </FdMenuItem>
                </FdMenuList>
              </FdMenu>
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
                v-for="product in products"
                :key="product.title"
                href="#"
                :src="$withBase(product.src)"
                :title="product.title"
              />
            </FdShellBarProductSwitcher>
          </FdShellBarAction>
        </FdShellBarActions>
      </FdShellBarGroup>
    </FdShellBar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          src: "images/products/01.png",
          title: "Fiori"
        },
        {
          src: "images/products/02.png",
          title: "S/4 HANA Cloud"
        },
        {
          src: "images/products/03.png",
          title: "Analytics Cloud"
        }
      ]
    };
  },
  computed: {
    srcset() {
      return [
        `${this.$withBase("images/sap-logo@2x.png")} 2x`,
        `${this.$withBase("images/sap-logo@3x.png")} 3x`,
        `${this.$withBase("images/sap-logo@4x.png")} 4x`
      ].join(", ");
    }
  }
};
</script>
