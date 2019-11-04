<template>
  <div>
    <p>
      Favorite Color:
      <span v-fd-font-weight:bold>{{ color }}</span>
    </p>
    <fd-menu-popover with-arrow placement="right">
      <template #control="{toggle}">
        <fd-button @click="toggle">Select Color</fd-button>
      </template>
      <template #default>
        <fd-menu-list>
          <FdMenuItem @click="color = 'red'">Red</FdMenuItem>
          <FdMenuItem @click="color = 'magenta'">Magenta</FdMenuItem>
          <FdMenuItem @click="color = 'green'">Green</FdMenuItem>
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
      color: 'red'
    }
  }
}
</script>
