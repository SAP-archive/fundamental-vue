<template>
  <FdSideNav>
    <FdNestedList>
      <FdNestedListItem v-for="item in items" :key="item.id">
        <FdNestedListLink>
          <FdNestedListTitle>
            {{ item.name }}
          </FdNestedListTitle>
        </FdNestedListLink>
      </FdNestedListItem>
    </FdNestedList>
  </FdSideNav>
</template>

<script>
export default {
  methods: {
    to(subItem) {
      return {
        path: this.$route.path,
        query: {
          subItemId: subItem.id
        }
      }
    }
  },
  data() {
    return {
      selectedId: 'A-3',
      items: [
        { name: 'Item A-1' },
        {
          name: 'Item A-2',
          children: [{ name: 'Item A-2-1' }, { name: 'Item A-2-2' }, { name: 'Item A-2-3' }]
        },
        {
          id: 'A-3',
          name: 'Item A-3',
          children: [{ name: 'Item A-3-1' }, { name: 'Item A-3-2' }, { name: 'Item A-3-3' }]
        },
        {
          name: 'Item A-4',
          children: [{ name: 'Item A-4-1' }, { name: 'Item A-4-2' }, { name: 'Item A-4-3' }]
        },
        { name: 'Item A-5' }
      ]
    }
  }
}
</script>
