<title>6 col grid with span helpers</title>

<template>
  <FdTileGrid :col="6">
    <FdTile description="Lorem ipsum" :rowSpan="2" backgroundColor="accent-3"/>
    <FdTile description="Lorem ipsum" :colSpan="4" backgroundColor="accent-4"/>
    <FdTile description="Lorem ipsum" :rowSpan="3" backgroundColor="accent-5"/>
    <FdTile description="Lorem ipsum" backgroundColor="accent-6"/>
    <FdTile description="Lorem ipsum" backgroundColor="accent-7"/>
    <FdTile description="Lorem ipsum" :colSpan="2" backgroundColor="accent-8"/>
    <FdTile description="Lorem ipsum" :colSpan="5" backgroundColor="accent-9"/>
  </FdTileGrid>
</template>