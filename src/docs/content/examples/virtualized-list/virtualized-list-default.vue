<template>
  <!--
    You have to import the CSS that is part of vue-virtual-scroller
    manually. Otherwise this component will not work:

    import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
  -->
  <fd-virtualized-list style="height: 400px;" :min-item-size="30" :items="items" key-field="id">
    <template #item="{ item, index }">
      <fd-tile is-button transparent>
        <fd-tile-content>
          <fd-tile-title>#{{ index }} {{ item.title }}</fd-tile-title>
        </fd-tile-content>
      </fd-tile>
    </template>
  </fd-virtualized-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: "1", title: "Item A" },
        { id: "2", title: "Item B" },
        { id: "3", title: "Item C" },
        { id: "4", title: "Item D" },
        { id: "5", title: "Item E" },
        { id: "6", title: "Item F" },
        { id: "7", title: "Item G" },
        { id: "8", title: "Item H" },
        { id: "9", title: "Item I" },
        { id: "10", title: "Item J" },
        { id: "11", title: "Item K" },
        { id: "12", title: "Item L" }
      ]
    };
  }
};
</script>
