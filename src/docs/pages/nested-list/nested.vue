<template>
  <FdNestedList withIcons>
    <FdNestedListItem>
      <FdNestedListLink href="#">
        <FdNestedListIcon icon="cart" />
        <FdNestedListTitle>Shop</FdNestedListTitle>
      </FdNestedListLink>
    </FdNestedListItem>

    <FdNestedListItem>
      <FdNestedListLink>
        <FdNestedListIcon icon="cart" />
        <FdNestedListTitle>Nested List A</FdNestedListTitle>
      </FdNestedListLink>

      <FdNestedList>
        <FdNestedListItem>
          <FdNestedListLink href="#">
            <FdNestedListTitle>Nested Item A1</FdNestedListTitle>
          </FdNestedListLink>
        </FdNestedListItem>
        <FdNestedListItem>
          <FdNestedListLink href="#">
            <FdNestedListTitle>Nested Item A2</FdNestedListTitle>
          </FdNestedListLink>
        </FdNestedListItem>
        <FdNestedListItem>
          <FdNestedListLink href="#">
            <FdNestedListTitle>Nested Item A3</FdNestedListTitle>
          </FdNestedListLink>
        </FdNestedListItem>
      </FdNestedList>
    </FdNestedListItem>

    <FdNestedListItem>
      <FdNestedListLink>
        <FdNestedListIcon icon="cart" />
        <FdNestedListTitle>Nested List B</FdNestedListTitle>
      </FdNestedListLink>

      <FdNestedList>
        <FdNestedListItem>
          <FdNestedListLink href="#">
            <FdNestedListTitle>Nested Item B1</FdNestedListTitle>
          </FdNestedListLink>
        </FdNestedListItem>
        <FdNestedListItem>
          <FdNestedListLink href="#">
            <FdNestedListTitle>Nested Item B2</FdNestedListTitle>
          </FdNestedListLink>
        </FdNestedListItem>
        <FdNestedListItem>
          <FdNestedListLink href="#">
            <FdNestedListTitle>Nested Item B3</FdNestedListTitle>
          </FdNestedListLink>
        </FdNestedListItem>
      </FdNestedList>
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
