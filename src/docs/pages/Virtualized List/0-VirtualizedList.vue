<title>Simple Virtualized List</title>

<docs>
You can use `fd-virtualized-list` when you need to display a lot of data in a scrollable list. `fd-virtualized-list` only renders what is currently on your screen. Offscreen data is not rendered. Thus scrolling through your list should be very efficient. `fd-virtualized-list` depends on a 3rd-party (open source) library called [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller). *Fundamental Vue* does not include a copy of [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller). It is up to you to properly setup [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller).

<div class="tip" style="border-left: 0.5rem solid #ffa94a;">
  <div class="tip-title">IMPORTANT</div>
  <div class="tip-body">
    <p>Your <code>items</code>-array must have some kind of unique identifier. Use the <code>key-field</code>-prop to specify the name of the property.</p>
  </div>
</div>

</docs>

<tip>
You also have to install [vue-observe-visibility](https://github.com/Akryum/vue-observe-visibility) because `fd-virtualized-list` requires the `v-observe-visibility`-directive.
</tip>
<template>
  <!--
    You have to import the CSS that is part of vue-virtual-scroller
    manually. Otherwise this component will not work:

    import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
  -->
  <fd-virtualized-list
    :min-item-size="30"
    :items="items"
    style="height: 400px;"
    key-field="id"
  >
    <template #item="{ item, index }">
      <div style="padding: 20px;">{{ item.title }}</div>
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
