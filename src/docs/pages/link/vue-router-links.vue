<template>
  <div>
    <FdTile>
      <FdTileContent>
        <p>
          This is how
          <fd-link :to="{ name: 'home' }">links look like by default</fd-link>. Isn't that nice?
        </p>
      </FdTileContent>
    </FdTile>

    <FdTile>
      <FdTileContent>
        <p>
          This is how
          <fd-link to="/" selected>selected links look like by</fd-link>. Isn't that nice?
        </p>
      </FdTileContent>
    </FdTile>

    <FdTile>
      <FdTileContent>
        <p>
          This is how
          <fd-link to="/" disabled>disabled links look like by</fd-link>. Isn't that nice?
        </p>
      </FdTileContent>
    </FdTile>
  </div>
</template>
<script>
export default {}
</script>
