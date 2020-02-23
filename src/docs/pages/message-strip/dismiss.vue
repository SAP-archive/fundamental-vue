<template>
  <div>
    <FdButton v-show="!visible" @click="visible = true">Show Message Strip</FdButton>
    <FdMessageStrip v-show="visible" @dismiss="visible = false">
      Quamvis sint sub aqua, sub aqua maledicere temptant.
      <FdLink href="#" @click.prevent>Learn more…</FdLink>
    </FdMessageStrip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    }
  }
}
</script>
