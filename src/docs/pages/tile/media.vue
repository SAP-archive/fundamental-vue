<template>
  <div>
    <fd-tile>
      <fd-tile-media>
        <fd-identifier size="m" icon="home" transparent />
      </fd-tile-media>
      <fd-tile-content>
        <fd-tile-title>Tile with Simple Identifier</fd-tile-title>
      </fd-tile-content>
    </fd-tile>

    <fd-tile>
      <fd-tile-media>
        <fd-identifier thumbnail circle :url="$withBase('images/headshot-male.jpg')" />
      </fd-tile-media>
      <fd-tile-content>
        <fd-tile-title>Tile with Avatar</fd-tile-title>
      </fd-tile-content>
    </fd-tile>

    <fd-tile>
      <fd-tile-media>
        <fd-identifier size="m" icon="money-bills" background-color="accent-3" />
      </fd-tile-media>
      <fd-tile-content>
        <fd-tile-title>Tile with Identifier</fd-tile-title>
        <p>Tile Description</p>
      </fd-tile-content>
    </fd-tile>
  </div>
</template>
