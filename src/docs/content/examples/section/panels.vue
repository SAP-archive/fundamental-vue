<template>
  <div>
    <fd-section>
      <fd-container>
        <fd-panel>Panel 1</fd-panel>
      </fd-container>
    </fd-section>

    <fd-section>
      <fd-container>
        <fd-col :span="6">
          <fd-panel>Panel 2 with col span 6</fd-panel>
        </fd-col>
        <fd-col :span="6">
          <fd-panel>Panel 3 with col span 6</fd-panel>
        </fd-col>
      </fd-container>
    </fd-section>
  </div>
</template>
