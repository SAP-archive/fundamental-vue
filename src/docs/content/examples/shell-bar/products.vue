<template>
  <div>
    <fd-shell-bar>
      <fd-shell-bar-group position="start">
        <fd-shell-bar-logo
          alt="SAP"
          :src="$withBase('images/sap-logo.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <fd-shell-bar-product>
          <fd-shell-bar-product-menu>
            <template #title>
              Very long Product Name
            </template>
            <template #default>
              <fd-menu-list>
                <fd-menu-item @click="itemClicked('a')">
                  Application A
                </fd-menu-item>
                <fd-menu-item>Sample Application No 1</fd-menu-item>
                <fd-menu-item>Sample Application No 1</fd-menu-item>
                <fd-menu-item>Sample Application No 1</fd-menu-item>
                <fd-menu-item>Sample Application No 2</fd-menu-item>
                <fd-menu-item>Sample Application No 2</fd-menu-item>
                <fd-menu-item>Sample Application No 2</fd-menu-item>
                <fd-menu-item>Sample Application No 3</fd-menu-item>
                <fd-menu-item>Sample Application No 3</fd-menu-item>
                <fd-menu-item>Sample Application No 3</fd-menu-item>
                <fd-menu-item>Sample Application No 4</fd-menu-item>
                <fd-menu-item>Sample Application No 4</fd-menu-item>
                <fd-menu-item>Sample Application No 4</fd-menu-item>
                <fd-menu-item>Sample Application No 5</fd-menu-item>
                <fd-menu-item>Sample Application No 5</fd-menu-item>
                <fd-menu-item>Sample Application No 5</fd-menu-item>
                <fd-menu-item>Sample Application No 6</fd-menu-item>
                <fd-menu-item>Sample Application No 6</fd-menu-item>
                <fd-menu-item>Sample Application No 6</fd-menu-item>
                <fd-menu-item>Sample Application No 7</fd-menu-item>
                <fd-menu-item>Sample Application No 7</fd-menu-item>
                <fd-menu-item>Sample Application No 7</fd-menu-item>
                <fd-menu-item>Sample Application No 8</fd-menu-item>
                <fd-menu-item>Sample Application No 8</fd-menu-item>
                <fd-menu-item>Sample Application No 8</fd-menu-item>
                <fd-menu-item>Sample Application No 9</fd-menu-item>
                <fd-menu-item>Sample Application No 9</fd-menu-item>
                <fd-menu-item>Sample Application No 9</fd-menu-item>
                <fd-menu-item>Sample Application No 10</fd-menu-item>
                <fd-menu-item>Sample Application No 10</fd-menu-item>
                <fd-menu-item>Sample Application No 10</fd-menu-item>
                <fd-menu-item>Sample Application No 11</fd-menu-item>
                <fd-menu-item>Sample Application No 11</fd-menu-item>
                <fd-menu-item>Sample Application No 11</fd-menu-item>
                <fd-menu-item>Sample Application No 12</fd-menu-item>
                <fd-menu-item>Sample Application No 12</fd-menu-item>
                <fd-menu-item>Sample Application No 12</fd-menu-item>
              </fd-menu-list>
            </template>
          </fd-shell-bar-product-menu>
        </fd-shell-bar-product>
        <fd-shell-bar-subtitle>Subtitle</fd-shell-bar-subtitle>
      </fd-shell-bar-group>
      <fd-shell-bar-group position="end">
        <fd-shell-bar-actions>
          <fd-shell-bar-action>
            <fd-shell-bar-product-switcher>
              <fd-shell-bar-product-switcher-item
                v-for="product in products"
                :key="product.title"
                href="#"
                :src="$withBase(product.src)"
                :title="product.title"
              />
            </fd-shell-bar-product-switcher>
          </fd-shell-bar-action>
        </fd-shell-bar-actions>
      </fd-shell-bar-group>
    </fd-shell-bar>

    <br />
    <br />
    <br />
    <br />
    <fd-shell-bar>
      <fd-shell-bar-group position="start">
        <fd-shell-bar-logo
          alt="SAP"
          :src="$withBase('images/sap-logo.png')"
          :srcset="srcset"
          width="48"
          height="24"
        />
        <fd-shell-bar-product>
          <fd-shell-bar-product-menu>
            <template #title>
              Short
            </template>
            <template #default>
              <fd-menu-list>
                <fd-menu-item @click="itemClicked('a')">
                  Application with a very very long name
                </fd-menu-item>
                <fd-menu-item>
                  anotherApplication with a very very long name
                </fd-menu-item>
              </fd-menu-list>
            </template>
          </fd-shell-bar-product-menu>
        </fd-shell-bar-product>
        <fd-shell-bar-subtitle>Subtitle</fd-shell-bar-subtitle>
      </fd-shell-bar-group>
      <fd-shell-bar-group position="end">
        <fd-shell-bar-actions>
          <fd-shell-bar-action>
            <fd-shell-bar-product-switcher>
              <fd-shell-bar-product-switcher-item
                v-for="product in products"
                :key="product.title"
                href="#"
                :src="$withBase(product.src)"
                :title="product.title"
              />
            </fd-shell-bar-product-switcher>
          </fd-shell-bar-action>
        </fd-shell-bar-actions>
      </fd-shell-bar-group>
    </fd-shell-bar>
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
        `${this.$withBase("images/sap-logo@2x.png")} 2x`,
        `${this.$withBase("images/sap-logo@3x.png")} 3x`,
        `${this.$withBase("images/sap-logo@4x.png")} 4x`
      ].join(", ");
    }
  }
};
</script>
