<title>Using the `.sync`-modifier</title>
<docs>
The prop `selectedId` supports the `.sync`-modifier. This way you can bind the selection of the navigation to your data model.
</docs>
<template>
  <div>
    <p class="fd-has-text-align-center fd-has-font-weight-bold">selected id: {{selectedId}}</p>
    <br />
    <FdSideNav :selectedId.sync="selectedId">
      <FdSideNavList :items="items" />
    </FdSideNav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedId: 'A-3',
      items: [
        { id: "A-1", name: "Item A-1" },
        { id: "A-2", name: "Item A-2", children: [
          { id: "A-2-1", name: "Item A-2-1" },
          { id: "A-2-2", name: "Item A-2-2" },
          { id: "A-2-3", name: "Item A-2-3" },
        ]},
        { id: "A-3", name: "Item A-3", children: [
          { id: "A-3-1", name: "Item A-3-1" },
          { id: "A-3-2", name: "Item A-3-2" },
          { id: "A-3-3", name: "Item A-3-3" },
        ]},
        { id: "A-4", name: "Item A-4", children: [
          { id: "A-4-1", name: "Item A-4-1" },
          { id: "A-4-2", name: "Item A-4-2" },
          { id: "A-4-3", name: "Item A-4-3" },
        ]},
        { id: "A-5", name: "Item A-5" },
      ]
    };
  },
};
</script>
