<template>
  <li class="fd-nested-list__item"><slot /></li>
</template>

<script>
import UidMixin from './../../mixins/uid'

export default {
  name: 'FdNestedListItem',
  mixins: [UidMixin],
  inject: {
    fdNestedList: {
      default: null
    }
  },
  provide() {
    return {
      fdNestedListItem: this
    }
  },
  data() {
    return {
      containsList: false
    }
  }
}
</script>
