<template>
  <div>
    <FdList type="multi-input">
      <FdListItem role="option">
        <FdListItemCheckbox
          id="fv-example-list-multi-input-1"
          nativeValue="item 1"
          v-model="selected"
        />
        <FdListItemCheckboxLabel for="fv-example-list-multi-input-1">
          <FdListTitle>List item 1</FdListTitle>
        </FdListItemCheckboxLabel>
      </FdListItem>

      <FdListItem role="option">
        <FdListItemCheckbox
          id="fv-example-list-multi-input-2"
          nativeValue="item 2"
          v-model="selected"
        />
        <FdListItemCheckboxLabel for="fv-example-list-multi-input-2">
          <FdListTitle>List item 2</FdListTitle>
        </FdListItemCheckboxLabel>
      </FdListItem>

      <FdListItem role="option">
        <FdListItemCheckbox
          id="fv-example-list-multi-input-3"
          nativeValue="item 3"
          v-model="selected"
        />
        <FdListItemCheckboxLabel for="fv-example-list-multi-input-3">
          <FdListTitle>List item 3</FdListTitle>
        </FdListItemCheckboxLabel>
      </FdListItem>

      <FdListItem role="option">
        <FdListItemCheckbox
          id="fv-example-list-multi-input-4"
          nativeValue="item 4"
          v-model="selected"
        />
        <FdListItemCheckboxLabel for="fv-example-list-multi-input-4">
          <FdListTitle>List item 4</FdListTitle>
        </FdListItemCheckboxLabel>
      </FdListItem>
    </FdList>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: []
    }
  }
}
</script>
