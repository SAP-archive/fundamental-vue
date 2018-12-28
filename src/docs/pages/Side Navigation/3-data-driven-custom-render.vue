<title>Customized Rendering</title>
<docs>
`FdSideNavList` allows you to render your own link. This is useful if you have special needs. You simply provide an element or a component that has it's `slot`-attribute set to `link`.

Every time `FdSideNavList` needs to render a link it checks if there is such a slot. If yes the custom `link`-slot will be used.

You don't have to use `FdSideNavLink` as your `link`-slot but it makes things just a lot easier. By using `slot-scope` you get access to the currently rendered item. `$item` will contain everything your `items`-objects do.
</docs>
<template>
  <FdSideNav :selectedId.sync="selectedId">
    <FdSideNavList :items="items">
      <FdSideNavLink
        slot="link"
        slot-scope="$item"
        @click="selectedId=$item.id"
        :selected="$item.id === selectedId">
          😇 {{$item.name}}
      </FdSideNavLink>
    </FdSideNavList>
  </FdSideNav>
</template>

<script>
export default {
  data() {
    return {
      selectedId: '3',
      items: [
        {id: "1", name: "Item 1" },
        {id: "2", name: "Item 2" },
        {id: "3", name: "Item 3" },
        {id: "4", name: "Item 4" },
        {id: "5", name: "Item 5" },
      ],
    };
  },
};
</script>
