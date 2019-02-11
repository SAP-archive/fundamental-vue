<title>Button with Icon</title>

<template>
  <div>
    <FdButton styling="emphasized" icon="cart">Add to Cart</FdButton>
    <FdButton icon="cart">Add to Cart</FdButton>
    <FdButton styling="light" icon="cart">Add to Cart</FdButton>
    <br /><br />
    <FdButton type="positive" styling="emphasized" icon="accept"
      >Approve</FdButton
    >
    <FdButton type="negative" styling="emphasized" icon="decline"
      >Reject</FdButton
    >
    <br /><br />
    <FdButton type="standard" icon="filter" />
    <FdButton icon="cart" />
    <FdButton styling="light" icon="cart" />
    <br /><br />
    <FdButton styling="emphasized" type="positive" icon="accept" />
    <FdButton styling="emphasized" type="negative" icon="decline" />
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
}
</style>
