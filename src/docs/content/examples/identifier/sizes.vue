<template>
  <div class="fdd-identifier--sizes">
    <fd-identifier size="xxs" icon="money-bills" />
    <fd-identifier size="xs" icon="money-bills" />
    <fd-identifier size="s" icon="money-bills" />
    <fd-identifier size="m" icon="money-bills" />
    <fd-identifier size="l" icon="money-bills" />
    <fd-identifier size="xl" icon="money-bills" />
    <fd-identifier size="xxl" icon="money-bills" />
    <br />
    <br />
    <fd-identifier size="xxs" icon="money-bills" circle />
    <fd-identifier size="xs" icon="money-bills" circle />
    <fd-identifier size="s" icon="money-bills" circle />
    <fd-identifier size="m" icon="money-bills" circle />
    <fd-identifier size="l" icon="money-bills" circle />
    <fd-identifier size="xl" icon="money-bills" circle />
    <fd-identifier size="xxl" icon="money-bills" circle />
    <br />
    <br />
    <fd-identifier size="xxs" circle>WW</fd-identifier>
    <fd-identifier size="xs" circle>WW</fd-identifier>
    <fd-identifier size="s" circle>WW</fd-identifier>
    <fd-identifier size="m" circle>WW</fd-identifier>
    <fd-identifier size="l" circle>WW</fd-identifier>
    <fd-identifier size="xl" circle>WW</fd-identifier>
    <fd-identifier size="xxl" circle>WW</fd-identifier>
    <br />
    <br />
    <fd-identifier size="xxs" thumbnail :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="xs" thumbnail :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="s" thumbnail :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="m" thumbnail :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="l" thumbnail :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="xl" thumbnail :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="xxl" thumbnail :url="$withBase('images/img-small.jpeg')" />
    <br />
    <br />
    <fd-identifier size="xxs" thumbnail circle :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="xs" thumbnail circle :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="s" thumbnail circle :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="m" thumbnail circle :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="l" thumbnail circle :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="xl" thumbnail circle :url="$withBase('images/img-small.jpeg')" />
    <fd-identifier size="xxl" thumbnail circle :url="$withBase('images/img-small.jpeg')" />
    <br />
    <br />
    <fd-identifier transparent size="xxs" icon="money-bills" />
    <fd-identifier transparent size="xs" icon="money-bills" />
    <fd-identifier transparent size="s" icon="money-bills" />
    <fd-identifier transparent size="m" icon="money-bills" />
    <fd-identifier transparent size="l" icon="money-bills" />
    <fd-identifier transparent size="xl" icon="money-bills" />
    <fd-identifier transparent size="xxl" icon="money-bills" />
    <br />
    <br />
    <fd-identifier transparent size="xxs">WW</fd-identifier>
    <fd-identifier transparent size="xs">WW</fd-identifier>
    <fd-identifier transparent size="s">WW</fd-identifier>
    <fd-identifier transparent size="m">WW</fd-identifier>
    <fd-identifier transparent size="l">WW</fd-identifier>
    <fd-identifier transparent size="xl">WW</fd-identifier>
    <fd-identifier transparent size="xxl">WW</fd-identifier>
  </div>
</template>

<style>
.fdd-identifier--sizes > span {
  margin-right: 10px;
}
</style>
