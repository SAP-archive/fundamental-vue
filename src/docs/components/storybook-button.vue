<template>
  <a :href="$withBase('storybook/')" class="d-storybook-button">Storybook</a>
</template>

<script>
export default {}
</script>

<style>
.d-storybook-button {
  text-decoration: none;
  border: 1px solid #0854a0;
  background-color: hsla(0, 0%, 100%, 0.9);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  border-radius: 3em;
  color: #0854a0;
  z-index: 1;
  font-size: 12px;
  letter-spacing: 0.08em;
  padding: 8px 11px;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.d-storybook-button:hover {
  color: #fff;
  background-color: #0854a0;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.d-storybook-button:active {
  color: #fff;
  background-color: #0854a0;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
