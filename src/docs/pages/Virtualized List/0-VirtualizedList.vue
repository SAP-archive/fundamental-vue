<title>Simple Virtualized List</title>

<docs>
You can use `fd-virtualized-list` when you need to display a lot of data in a scrollable list. `fd-virtualized-list` only renders what is currently on your screen. Offscreen data is not rendered. Thus scrolling through your list should be very efficient. `fd-virtualized-list` depends on a 3rd-party (open source) library called [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller). *Fundamental Vue* does not include a copy of [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller). It is up to you to properly setup [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller).

<div class="tip" style="border-left: 0.5rem solid #ffa94a;">
  <div class="tip-title">IMPORTANT</div>
  <div class="tip-body">
    <p>You also have to install <a href="https://github.com/Akryum/vue-observe-visibility">vue-observe-visibility</a>. <code>fd-virtualized-list</code> makes use of the <code>v-observe-visibility</code>-directive.</p>
  </div>
</div>

</docs>

<condensed />

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
        { title: "Item A" },
        { title: "Item B" },
        { title: "Item C" },
        { title: "Item D" },
        { title: "Item E" },
        { title: "Item F" },
        { title: "Item G" },
        { title: "Item H" },
        { title: "Item I" },
        { title: "Item J" },
        { title: "Item K" },
        { title: "Item L" }
      ]
    };
  }
};
</script>
