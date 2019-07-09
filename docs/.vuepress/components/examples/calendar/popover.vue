<template>
  <div v-fd-padding:large>
    <fd-popover withArrow>
      <template #control="{toggle}">
        <fd-button @click="toggle">Pick Date</fd-button>
      </template>
      <template #default>
        <div v-fd-padding:tiny>
          <fd-calendar />
        </div>
      </template>
    </fd-popover>
  </div>
</template>
