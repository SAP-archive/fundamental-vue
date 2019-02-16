<title>Panel Grid with Column Span</title>

<template>
  <FdPanelGrid :col="6">
    <FdPanel :span="2">Panel Body 1 - span 2</FdPanel>
    <FdPanel>Panel Body 2</FdPanel>
    <FdPanel>Panel Body 3</FdPanel>
    <FdPanel>Panel Body 4</FdPanel>
    <FdPanel>Panel Body 5</FdPanel>
    <FdPanel :span="3">Panel Body 6 - span 3</FdPanel>
    <FdPanel>Panel Body 7</FdPanel>
    <FdPanel>Panel Body 8</FdPanel>
    <FdPanel>Panel Body 9</FdPanel>
    <FdPanel :span="4">Panel Body 10 - span 4</FdPanel>
    <FdPanel>Panel Body 11</FdPanel>
    <FdPanel>Panel Body 12</FdPanel>
    <FdPanel :span="5">Panel Body 13 - span 5</FdPanel>
    <FdPanel>Panel Body 14</FdPanel>
    <FdPanel :span="6">Panel Body 15 - span 6</FdPanel>
  </FdPanelGrid>
</template>
