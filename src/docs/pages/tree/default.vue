<template>
  <FdTree :items="items">
    <FdTreeItem>
      <FdTreeRow>
        <FdTreeControlCol> <FdTreeControl expanded /> First Level </FdTreeControlCol>
        <FdTreeCol>C2</FdTreeCol>
        <FdTreeCol>C3</FdTreeCol>
        <FdTreeCol>C4</FdTreeCol>
      </FdTreeRow>
    </FdTreeItem>
    <FdTreeGroup :hidden="false">
      <FdTreeItem>
        <FdTreeRow>
          <FdTreeControlCol> <FdTreeControl />First Level </FdTreeControlCol>
          <FdTreeCol>C2</FdTreeCol>
          <FdTreeCol>C3</FdTreeCol>
          <FdTreeCol>C4</FdTreeCol>
        </FdTreeRow>
      </FdTreeItem>
    </FdTreeGroup>
  </FdTree>
</template>

<script>
export default {
  data() {
    return {
      items: {
        null: [1, 2, 3, 4],
        1: [],
        2: [21, 22, 23],
        3: [31, 32, 33],
        4: [41, 42, 43],
        21: [],
        22: [],
        23: [],
        31: [],
        32: [],
        33: [],
        41: [],
        42: [],
        43: []
      }
    }
  }
}
</script>
