<title>Tile as a Button</title>

<template>
  <FdTile title="Title" description="Description" isButton>
    <p slot="media">
      <FdIdentifier size="m" icon="money-bills" backgroundColor="accent-3"/>
    </p>
    <p slot="actions">
      <FdButton styling="light" icon="vertical-grip"/>
    </p>
  </FdTile>
</template>