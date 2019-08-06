<script>
export default {
  props: {
    itemIdPath: {
      // string indicating the path to the property to be used as unique key for every node
      type: String,
      default: "id"
    },
    itemChildrenPath: {
      // string indicating the path to the property containing the array of children
      type: String,
      default: "children"
    },
    itemValuePath: {
      // string indicating the path to the property to be used as label for every node
      type: String,
      default: "name"
    },
    itemDisabledPath: {
      // string indicating the path to the boolean property to use to determine whether a node should be disabled
      type: String,
      default: "disabled"
    }
  }
};
</script>
