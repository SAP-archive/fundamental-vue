<title>Menu Popover with multiple Lists</title>

<template>
  <div>
    <p>
      Favorite Color: <span v-fd-font-weight:bold>{{ color }}</span>
    </p>
    <p>
      Favorite Dish: <span v-fd-font-weight:bold>{{ dish }}</span>
    </p>
    <fd-menu-popover>
      <template #control="{toggle}">
        <fd-button @click="toggle">Select Dish & Color</fd-button>
      </template>
      <template #default>
        <fd-menu-list header="Favorite Color">
          <fd-menu-item @click="color = 'red'">Red</fd-menu-item>
          <fd-menu-item @click="color = 'magenta'">Magenta</fd-menu-item>
        </fd-menu-list>
        <fd-menu-list header="Favorite Dish">
          <fd-menu-item @click="dish = 'noodles'">Noodles</fd-menu-item>
          <fd-menu-item @click="dish = 'pizza'">Pizza</fd-menu-item>
        </fd-menu-list>
      </template>
    </fd-menu-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "red",
      dish: "pizza"
    };
  }
};
</script>
