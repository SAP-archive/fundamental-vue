<template>
  <div class="fdd-button__styling">
    <fd-button styling="emphasized">Emphasized Button</fd-button>
    <fd-button>Regular Button</fd-button>
    <fd-button styling="light">Light Button</fd-button>
  </div>
</template>

<style>
.fdd-button__styling > button[class*="fd-button"] {
  margin-right: 10px;
}
</style>
