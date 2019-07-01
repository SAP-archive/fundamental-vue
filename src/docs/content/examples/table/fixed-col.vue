<template>
  <div>
    <fd-table-fixed-wrapper style="width: 100%;">
      <fd-table-fixed>
        <fd-table
          :headers="[
            'firstName',
            'lastName',
            'building',
            'building1',
            'building2',
            'building3',
            'building4',
            'building5',
            'building6',
            'building7',
            'building8',
            'building9'
          ]"
          firstColumnFixed
          :items="items"
        >
          <template #row="{ item }">
            <fd-table-row>
              <template #firstName>
                <fd-table-cell>{{ item.firstName }}</fd-table-cell>
              </template>

              <template #lastName>
                <fd-table-cell>{{ item.lastName }}</fd-table-cell>
              </template>

              <template #building>
                <fd-table-cell>{{ item.building }}</fd-table-cell>
              </template>

              <template #building1>
                <fd-table-cell>{{ item.building }}1</fd-table-cell>
              </template>

              <template #building2>
                <fd-table-cell>{{ item.building }}2</fd-table-cell>
              </template>

              <template #building3>
                <fd-table-cell>{{ item.building }}3</fd-table-cell>
              </template>

              <template #building4>
                <fd-table-cell>{{ item.building }}4</fd-table-cell>
              </template>

              <template #building5>
                <fd-table-cell>{{ item.building }}5</fd-table-cell>
              </template>

              <template #building6>
                <fd-table-cell>{{ item.building }}6</fd-table-cell>
              </template>

              <template #building7>
                <fd-table-cell>{{ item.building }}7</fd-table-cell>
              </template>

              <template #building8>
                <fd-table-cell>{{ item.building }}8</fd-table-cell>
              </template>

              <template #building9>
                <fd-table-cell>{{ item.building }}9</fd-table-cell>
              </template>
            </fd-table-row>
          </template>
        </fd-table>
      </fd-table-fixed>
    </fd-table-fixed-wrapper>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: "1",
        rating: 1,
        firstName: "Chris",
        lastName: "Kienle",
        building: "WFD02"
      },
      {
        id: "2",
        rating: 2,
        firstName: "Andi",
        lastName: "Kienle",
        building: "WFD03"
      },
      {
        id: "3",
        rating: 3,
        firstName: "Sven",
        lastName: "Bacia",
        building: "WFD02"
      },
      {
        id: "4",
        rating: 4,
        firstName: "Artur",
        lastName: "Raess",
        building: "WFD02"
      }
    ]
  })
};
</script>
