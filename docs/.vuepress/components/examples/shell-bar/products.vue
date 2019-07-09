<template>
  <div>
    <FdShellBar>
      <FdShellBarGroup position="start">
        <FdShellBarLogo
          alt="SAP"
          :src="$withBase('/images/sap-logo.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <FdShellBarProduct>
          <FdShellBarProductMenu>
            <template #title
              >Very long Product Name</template
            >
            <template #default>
              <FdMenuList>
                <FdMenuItem @click="itemClicked('a')">
                  Application A
                </FdMenuItem>
                <FdMenuItem>Sample Application No 1</FdMenuItem>
                <FdMenuItem>Sample Application No 1</FdMenuItem>
                <FdMenuItem>Sample Application No 1</FdMenuItem>
                <FdMenuItem>Sample Application No 2</FdMenuItem>
                <FdMenuItem>Sample Application No 2</FdMenuItem>
                <FdMenuItem>Sample Application No 2</FdMenuItem>
                <FdMenuItem>Sample Application No 3</FdMenuItem>
                <FdMenuItem>Sample Application No 3</FdMenuItem>
                <FdMenuItem>Sample Application No 3</FdMenuItem>
                <FdMenuItem>Sample Application No 4</FdMenuItem>
                <FdMenuItem>Sample Application No 4</FdMenuItem>
                <FdMenuItem>Sample Application No 4</FdMenuItem>
                <FdMenuItem>Sample Application No 5</FdMenuItem>
                <FdMenuItem>Sample Application No 5</FdMenuItem>
                <FdMenuItem>Sample Application No 5</FdMenuItem>
                <FdMenuItem>Sample Application No 6</FdMenuItem>
                <FdMenuItem>Sample Application No 6</FdMenuItem>
                <FdMenuItem>Sample Application No 6</FdMenuItem>
                <FdMenuItem>Sample Application No 7</FdMenuItem>
                <FdMenuItem>Sample Application No 7</FdMenuItem>
                <FdMenuItem>Sample Application No 7</FdMenuItem>
                <FdMenuItem>Sample Application No 8</FdMenuItem>
                <FdMenuItem>Sample Application No 8</FdMenuItem>
                <FdMenuItem>Sample Application No 8</FdMenuItem>
                <FdMenuItem>Sample Application No 9</FdMenuItem>
                <FdMenuItem>Sample Application No 9</FdMenuItem>
                <FdMenuItem>Sample Application No 9</FdMenuItem>
                <FdMenuItem>Sample Application No 10</FdMenuItem>
                <FdMenuItem>Sample Application No 10</FdMenuItem>
                <FdMenuItem>Sample Application No 10</FdMenuItem>
                <FdMenuItem>Sample Application No 11</FdMenuItem>
                <FdMenuItem>Sample Application No 11</FdMenuItem>
                <FdMenuItem>Sample Application No 11</FdMenuItem>
                <FdMenuItem>Sample Application No 12</FdMenuItem>
                <FdMenuItem>Sample Application No 12</FdMenuItem>
                <FdMenuItem>Sample Application No 12</FdMenuItem>
              </FdMenuList>
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

    <br /><br /><br /><br />
    <FdShellBar>
      <FdShellBarGroup position="start">
        <FdShellBarLogo
          alt="SAP"
          :src="$withBase('/images/sap-logo.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <FdShellBarProduct>
          <FdShellBarProductMenu>
            <template #title
              >Short</template
            >
            <template #default>
              <FdMenuList>
                <FdMenuItem @click="itemClicked('a')">
                  Application with a very very long name
                </FdMenuItem>
                <FdMenuItem>
                  anotherApplication with a very very long name
                </FdMenuItem>
              </FdMenuList>
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
  methods: {
    itemClicked(item) {
      // eslint-disable-next-line no-console
      console.log("item clicked", item);
    }
  },
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
        `${this.$withBase("/images/sap-logo@2x.png")} 2x`,
        `${this.$withBase("/images/sap-logo@3x.png")} 3x`,
        `${this.$withBase("/images/sap-logo@4x.png")} 4x`
      ].join(", ");
    }
  }
};
</script>
