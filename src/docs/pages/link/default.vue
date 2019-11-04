<template>
  <div>
    <FdTile>
      <FdTileContent>
        <p>
          This is how
          <fd-link href="#" data-bla="yyy" @click="handleClick">links look like by default</fd-link
          >. Isn't that nice?
        </p>
      </FdTileContent>
    </FdTile>

    <FdTile>
      <FdTileContent>
        <p>
          This is how
          <fd-link href="#" selected @click="handleClick">selected links look like by</fd-link>.
          Isn't that nice?
        </p>
      </FdTileContent>
    </FdTile>

    <FdTile>
      <FdTileContent>
        <p>
          This is how
          <fd-link href="#" disabled @click="handleClick">disabled links look like by</fd-link>.
          Isn't that nice?
        </p>
      </FdTileContent>
    </FdTile>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log('clicked') // eslint-disable-line no-console
    }
  }
}
</script>
