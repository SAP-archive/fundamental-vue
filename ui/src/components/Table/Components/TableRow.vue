<script lang="ts">
import Vue, { CreateElement, VNode } from "vue";
import { PropValidator } from "vue/types/options";

export default Vue.extend({
  name: "FdTableRow",
  inject: {
    table: { default: null }
  },
  props: {
    itemId: {
      type: String,
      default: null
    } as PropValidator<string | null>,
    isSelected: {
      type: Boolean,
      default: false
    } as PropValidator<boolean>
  },
  computed: {
    firstColumnFixed(): boolean {
      // @ts-ignore
      const table = this.table;
      return (table || false) && table.firstColumnFixed;
    }
  },
  methods: {
    handleClick() {
      // @ts-ignore
      const table = this.table;
      const { itemId } = this;
      if (itemId == null || table == null) {
        return false;
      }
      table.toggleSelectionForItem(itemId);
    }
  },
  render(h: CreateElement): VNode {
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
});
</script>
