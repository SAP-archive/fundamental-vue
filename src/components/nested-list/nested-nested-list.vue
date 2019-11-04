<script>
import FdNestedList from './nested-list'

export default {
  name: 'FdNestedNestedList',
  render(h, context) {
    return h(FdNestedList, context.data, context.children)
  }
}
</script>
