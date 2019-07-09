<template>
  <div>
    <fd-tile is-button @click="handleClick">
      <fd-tile-content>
        <fd-tile-title>Button Tile</fd-tile-title>
      </fd-tile-content>
    </fd-tile>

    <fd-tile is-button disabled>
      <fd-tile-content>
        <fd-tile-title>Disabled Button Tile</fd-tile-title>
      </fd-tile-content>
    </fd-tile>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("click"); // eslint-disable-line no-console
    }
  }
};
</script>
