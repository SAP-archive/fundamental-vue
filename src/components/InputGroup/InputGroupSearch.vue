<template>
  <fd-input-group>
    <template #input>
      <fd-input type="search" plain placeholder="Enter Search Term…" />
    </template>
    <template #after-input>
      <fd-input-group-addon>
        <slot name="clear" />
      </fd-input-group-addon>
    </template>
  </fd-input-group>
</template>

<script>
import FdInputGroup from "./InputGroup.vue";
import FdInputGroupAddon from "./InputGroupAddon.vue";

export default {
  name: "FdInputGroupSearch",
  components: { FdInputGroup, FdInputGroupAddon }
};
</script>
