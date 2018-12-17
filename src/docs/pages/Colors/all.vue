<title>Colors</title>

<template>
  <div class="grid">
    <div v-bg:action-1/>
    <div v-bg:action-2/>
    <div v-bg:text-1/>
    <div v-bg:text-2/>
    <div v-bg:text-3/>
    <div v-bg:text-4/>
    <div v-bg:text-5/>
    <div v-bg:background-1/>
    <div v-bg:background-2/>
    <div v-bg:neutral-1/>
    <div v-bg:neutral-2/>
    <div v-bg:neutral-3/>
    <div v-bg:neutral-4/>
    <div v-bg:status-1/>
    <div v-bg:status-2/>
    <div v-bg:status-3/>
    <div v-bg:status-4/>
    <div v-bg:accent-1/>
    <div v-bg:accent-2/>
    <div v-bg:accent-3/>
    <div v-bg:accent-4/>
    <div v-bg:accent-5/>
    <div v-bg:accent-6/>
    <div v-bg:accent-7/>
    <div v-bg:accent-8/>
    <div v-bg:accent-9/>
    <div v-bg:accent-10/>
    <div v-bg:accent-11/>
    <div v-bg:accent-12/>
    <div v-bg:accent-13/>
    <div v-bg:accent-14/>
    <div v-bg:accent-15/>
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