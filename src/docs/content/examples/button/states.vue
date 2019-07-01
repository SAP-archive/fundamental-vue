<template>
  <div class="fdd-button__states">
    <fd-button styling="emphasized" state="normal">Normal State</fd-button>
    <fd-button styling="emphasized" state="selected">Selected State</fd-button>
    <fd-button styling="emphasized" state="disabled">Disabled State</fd-button>
    <br />
    <br />
    <fd-button state="normal">Normal State</fd-button>
    <fd-button state="selected">Selected State</fd-button>
    <fd-button state="disabled">Disabled State</fd-button>
    <br />
    <br />
    <fd-button styling="light" state="normal">Normal State</fd-button>
    <fd-button styling="light" state="selected">Selected State</fd-button>
    <fd-button styling="light" state="disabled">Disabled State</fd-button>
    <br />
    <br />
    <fd-button type="standard" state="normal">Normal State</fd-button>
    <fd-button type="standard" state="selected">Selected State</fd-button>
    <fd-button type="standard" state="disabled">Disabled State</fd-button>
    <br />
    <br />
    <fd-button type="positive" state="normal">Normal State</fd-button>
    <fd-button type="positive" state="selected">Selected State</fd-button>
    <fd-button type="positive" state="disabled">Disabled State</fd-button>
    <br />
    <br />
    <fd-button type="medium" state="normal">Normal State</fd-button>
    <fd-button type="medium" state="selected">Selected State</fd-button>
    <fd-button type="medium" state="disabled">Disabled State</fd-button>
    <br />
    <br />
    <fd-button type="negative" state="normal">Normal State</fd-button>
    <fd-button type="negative" state="selected">Selected State</fd-button>
    <fd-button type="negative" state="disabled">Disabled State</fd-button>
  </div>
</template>

<style>
.fdd-button__states > button[class*="fd-button"] {
  margin-right: 10px;
}
</style>
