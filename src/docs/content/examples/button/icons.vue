<template>
  <div class="fdd-button__icons">
    <fd-button styling="emphasized" icon="cart">Add to Cart</fd-button>
    <fd-button icon="cart">Add to Cart</fd-button>
    <fd-button styling="light" icon="cart">Add to Cart</fd-button>
    <br />
    <br />
    <fd-button type="positive" styling="emphasized" icon="accept">Approve</fd-button>
    <fd-button type="negative" styling="emphasized" icon="decline">Reject</fd-button>
    <br />
    <br />
    <fd-button type="standard" icon="filter" />
    <fd-button icon="cart" />
    <fd-button styling="light" icon="cart" />
    <br />
    <br />
    <fd-button styling="emphasized" type="positive" icon="accept" />
    <fd-button styling="emphasized" type="negative" icon="decline" />
  </div>
</template>
<style>
.fdd-button__icons > button[class*="fd-button"] {
  margin-right: 10px;
}
</style>
