<template>
  <div class="fd-user-menu">
    <FdPopover placement="bottom-end" withArrow>
      <template #control="{toggle}">
        <div
          class="fd-user-menu__control"
          role="button"
          title="Experimental"
          @click="toggle"
        >
          <FdIdentifier
            size="s"
            backgroundColor="accent-6"
            circle
            icon="settings"
          />
        </div>
      </template>
      <template #default>
        <slot />
      </template>
    </FdPopover>
  </div>
</template>

<script>
import FdPopover from "./../../Popover/Popover.vue";
import FdIdentifier from "./../../Identifier/Identifier.vue";

export default {
  name: "FdShellBarUserMenu",
  components: { FdPopover, FdIdentifier }
};
</script>
