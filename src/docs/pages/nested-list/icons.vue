<template>
  <FdNestedList withIcons>
    <FdNestedListItem v-for="item in items" :key="item.id">
      <FdNestedListLink href="#">
        <FdNestedListIcon icon="cart" />
        <FdNestedListTitle>
          {{ item.text }}
        </FdNestedListTitle>
      </FdNestedListLink>
    </FdNestedListItem>
  </FdNestedList>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 'a', text: 'aaa' },
        { id: 'b', text: 'bbb' },
        { id: 'c', text: 'ccc' }
      ]
    }
  }
}
</script>
