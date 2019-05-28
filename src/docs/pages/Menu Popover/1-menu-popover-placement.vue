<title>Customized Menu Popover</title>
<docs>
`fd-menu-popover` is a simple wrapper around `fd-popover`. Any attributes you set on `fd-menu-popover` that are not directly handled by `fd-menu-popver` itself will be passed through to the wrapped `fd-popover`. This allows you to set all `fd-popover`-related props. The example below shows how to set the `placement`-prop. Since `fd-menu-popover` has no custom `placement`-prop it will simply pass it to the popover.
</docs>
<template>
  <div>
    <p>
      Favorite Color: <span v-fd-font-weight:bold>{{ color }}</span>
    </p>
    <fd-menu-popover with-arrow placement="right">
      <template #control="{toggle}">
        <fd-button @click="toggle">Select Color</fd-button>
      </template>
      <template #default>
        <fd-menu-list>
          <fd-menu-item @click="color = 'red'">Red</fd-menu-item>
          <fd-menu-item @click="color = 'magenta'">Magenta</fd-menu-item>
          <fd-menu-item @click="color = 'green'">Green</fd-menu-item>
        </fd-menu-list>
      </template>
    </fd-menu-popover>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red"
    };
  }
};
</script>
