<template>
  <div class="fd-action-bar">
    <!-- A custom back-component – use `fd-action-bar-back` with a custom `fd-button` inside or use the `fd-back-button`-slot -->
    <slot name="back">
      <fd-action-bar-back>
        <!-- A custom back button – only used when the `back`-slot is **not** used. -->
        <slot name="back-button" />
      </fd-action-bar-back>
    </slot>
    <!-- A custom header – use `fd-action-bar-header` -->
    <slot name="header">
      <fd-action-bar-header>
        <template #title>
          <slot name="header-title" />
        </template>
        <template #description>
          <slot name="header-description" />
        </template>
      </fd-action-bar-header>
    </slot>
    <!-- Action bar actions – use `fd-action-bar-actions` with `fd-button`-instances inside. -->
    <slot name="actions" />
  </div>
</template>

<script>
import FdActionBarHeader from "./action-bar-header.vue";
import FdActionBarBack from "./action-bar-back.vue";

// The Action Bar is located at the top of the page and is used for the following displaying a page title and actions.
export default {
  name: "FdActionBar",
  components: { FdActionBarHeader, FdActionBarBack }
};
</script>
