<template>
    <div class="fd-tile fd-has-background-color-background-1 docsTile">
        <div class="fd-tile__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
  name: "DocsTile"
};
</script>

<style scoped>
  .docsTile {
    border: 1px solid #ccc;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    padding: 10px 0;
  }
</style>