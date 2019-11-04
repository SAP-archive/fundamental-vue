<template>
  <div>
    <fd-shell-bar>
      <fd-shell-bar-product-group>
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
              </fd-menu-list>
            </template>
          </fd-shell-bar-product-menu>
        </fd-shell-bar-product>
        <fd-shell-bar-subtitle>Subtitle</fd-shell-bar-subtitle>
      </fd-shell-bar-product-group>
      <fd-shell-bar-actions-group>
        <fd-shell-bar-action>
          <fd-product-switcher>
            <fd-product-switcher-item v-for="product in products" :key="product.title">
              <fd-product-switcher-icon :icon="product.icon" />
              <fd-product-switcher-text>
                <fd-product-switcher-title>{{ product.title }}</fd-product-switcher-title>
              </fd-product-switcher-text>
            </fd-product-switcher-item>
          </fd-product-switcher>
        </fd-shell-bar-action>
      </fd-shell-bar-actions-group>
    </fd-shell-bar>

    <br />
    <br />
    <br />
    <br />
    <fd-shell-bar>
      <fd-shell-bar-product-group>
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
                <FdMenuItem @click="itemClicked('a')">
                  Application with a very very long name
                </FdMenuItem>
                <FdMenuItem>
                  anotherApplication with a very very long name
                </FdMenuItem>
              </fd-menu-list>
            </template>
          </fd-shell-bar-product-menu>
        </fd-shell-bar-product>
        <fd-shell-bar-subtitle>Subtitle</fd-shell-bar-subtitle>
      </fd-shell-bar-product-group>
      <fd-shell-bar-actions-group>
        <fd-shell-bar-action>
          <fd-product-switcher>
            <fd-product-switcher-item v-for="product in products" :key="product.title">
              <fd-product-switcher-icon :icon="product.icon" />
              <fd-product-switcher-text>
                <fd-product-switcher-title>{{ product.title }}</fd-product-switcher-title>
              </fd-product-switcher-text>
            </fd-product-switcher-item>
          </fd-product-switcher>
        </fd-shell-bar-action>
      </fd-shell-bar-actions-group>
    </fd-shell-bar>
  </div>
</template>

<script>
export default {
  methods: {
    itemClicked(item) {
      // eslint-disable-next-line no-console
      console.log('item clicked', item)
    }
  },
  data() {
    return {
      products: [
        {
          icon: 'home',
          title: 'Fiori'
        },
        {
          icon: 'business-objects-experience',
          title: 'S/4 HANA Cloud'
        },
        {
          icon: 'contacts',
          title: 'Analytics Cloud'
        },
        {
          icon: 'credit-card',
          title: 'Guided Buying'
        },
        {
          icon: 'cart-3',
          title: 'Strategic Procurement'
        },
        {
          icon: 'flight',
          title: 'Travel'
        },
        {
          icon: 'shipping-status',
          title: 'Vendor Management'
        },
        {
          icon: 'customer',
          title: 'Customer Experience'
        },
        {
          icon: 'sales-notification',
          title: 'Sales Cloud'
        }
      ]
    }
  },
  computed: {
    srcset() {
      return [
        `${this.$withBase('images/sap-logo@2x.png')} 2x`,
        `${this.$withBase('images/sap-logo@3x.png')} 3x`,
        `${this.$withBase('images/sap-logo@4x.png')} 4x`
      ].join(', ')
    }
  }
}
</script>
