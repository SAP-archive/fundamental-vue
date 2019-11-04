<template>
  <div>
    <p>
      Favorite Color:
      <span v-fd-font-weight:bold>{{ color }}</span>
    </p>
    <p>
      Favorite Dish:
      <span v-fd-font-weight:bold>{{ dish }}</span>
    </p>
    <p>
      highlightedId:
      <span v-fd-font-weight:bold>{{ highlightedId }}</span>
    </p>
    <fd-menu-popover @highlight="highlightedId = $event.uid">
      <template #control="{toggle}">
        <fd-button @click="toggle">Select Dish & Color</fd-button>
      </template>
      <template #default>
        <fd-menu-list header="Favorite Color">
          <FdMenuItem @click="color = 'red'">Red</FdMenuItem>
          <FdMenuItem @click="color = 'magenta'">Magenta</FdMenuItem>
        </fd-menu-list>
        <fd-menu-list header="Favorite Dish">
          <FdMenuItem @click="dish = 'noodles'">Noodles</FdMenuItem>
          <FdMenuItem @click="dish = 'pizza'">Pizza</FdMenuItem>
        </fd-menu-list>
      </template>
    </fd-menu-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      highlightedId: 'none',
      color: 'red',
      dish: 'pizza'
    }
  }
}
</script>
