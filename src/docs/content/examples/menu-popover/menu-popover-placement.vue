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
