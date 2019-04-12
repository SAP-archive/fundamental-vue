<script>
export default {
  name: "FdTableRow",
  inject: {
    table: { default: null }
  },
  props: {
    itemId: {
      type: String,
      default: null
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    firstColumnFixed() {
      const table = this.table;
      return (table || false) && table.firstColumnFixed;
    }
  },
  methods: {
    handleClick() {
      const table = this.table;
      const { itemId } = this;
      if (itemId == null || table == null) {
        return false;
      }
      table.toggleSelectionForItem(itemId);
    }
  },
  render(h) {
    const cells = this.$slots.default || [];
    cells.forEach((cell, index) => {
      const options = cell.componentOptions;
      if (options == null) {
        return;
      }
      const fixed = index === 0 && this.firstColumnFixed;
      const { propsData = {} } = options;
      options.propsData = { ...propsData, fixed };
    });
    return h(
      "tr",
      {
        on: {
          ...this.$listeners,
          "&click": this.handleClick // & = passive modifier
        },
        attrs: {
          "aria-selected": this.isSelected
        }
      },
      cells
    );
  }
};
</script>
