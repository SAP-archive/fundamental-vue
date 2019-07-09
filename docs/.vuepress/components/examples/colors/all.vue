<title>Colors</title>

<template>
  <div class="grid">
    <div v-fd-background-color:action-1 />
    <div v-fd-background-color:action-2 />
    <div v-fd-background-color:text-1 />
    <div v-fd-background-color:text-2 />
    <div v-fd-background-color:text-3 />
    <div v-fd-background-color:text-4 />
    <div v-fd-background-color:text-5 />
    <div v-fd-background-color:background-1 />
    <div v-fd-background-color:background-2 />
    <div v-fd-background-color:neutral-1 />
    <div v-fd-background-color:neutral-2 />
    <div v-fd-background-color:neutral-3 />
    <div v-fd-background-color:neutral-4 />
    <div v-fd-background-color:status-1 />
    <div v-fd-background-color:status-2 />
    <div v-fd-background-color:status-3 />
    <div v-fd-background-color:status-4 />
    <div v-fd-background-color:accent-1 />
    <div v-fd-background-color:accent-2 />
    <div v-fd-background-color:accent-3 />
    <div v-fd-background-color:accent-4 />
    <div v-fd-background-color:accent-5 />
    <div v-fd-background-color:accent-6 />
    <div v-fd-background-color:accent-7 />
    <div v-fd-background-color:accent-8 />
    <div v-fd-background-color:accent-9 />
    <div v-fd-background-color:accent-10 />
    <div v-fd-background-color:accent-11 />
    <div v-fd-background-color:accent-12 />
    <div v-fd-background-color:accent-13 />
    <div v-fd-background-color:accent-14 />
    <div v-fd-background-color:accent-15 />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-auto-rows: 1fr;
}

.grid::before {
  content: "";
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.grid > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.grid > * {
  background: rgba(0, 0, 0, 0.1);
  border: 1px lightgray solid;
  margin: 5px;
  border-radius: 10px;
}
</style>
