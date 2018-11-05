<template>
  <div>
    <vf-button styling="emphasized" icon="cart">Add to Cart</vf-button>
    <vf-button icon="cart">Add to Cart</vf-button>
    <vf-button styling="light" icon="cart">Add to Cart</vf-button>
    <br/><br/>
    <vf-button type="positive" styling="emphasized" icon="accept">Approve</vf-button>
    <vf-button type="negative" styling="emphasized" icon="decline">Reject</vf-button>
    <br/><br/>
    <vf-button type="standard" icon="filter" />
    <vf-button icon="cart" />
    <vf-button styling="light" icon="cart" />
    <br/><br/>
    <vf-button styling="emphasized" type="positive" icon="accept" />
    <vf-button styling="emphasized" type="negative" icon="decline" />
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
}
</style>
