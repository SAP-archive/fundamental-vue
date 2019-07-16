<script>
// Renders a single table cell.
export default {
  name: "FdTableCell",
  props: {
    // Override the scope for this specific cell – used for a11y-related things.
    // The scope is automatically set for you – use this prop only if you have special needs.
    scope: {
      // `col` / `row` / `null`
      type: String,
      validator: value => value === "col" || value === "row",
      // `null`
      default: null
    },
    // Whether or not this cell is rendered inside in a fixed column.
    // `fixed` is automatically set for you – use this prop only if you have special needs.
    fixed: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    fdTableFixedProvider: {
      default: {
        fixed: null
      }
    }
  },
  render(h) {
    const { fixed_, style, classes, $slots } = this;
    const tag = fixed_ ? "th" : "td";
    const attrs = fixed_ ? { scope: this.scope_ } : {};
    return h(tag, { attrs, style, class: classes }, $slots.default);
  },
  computed: {
    scope_() {
      const { scope, fixed_ } = this;
      if (scope != null) {
        return scope;
      }
      return fixed_ ? "row" : null;
    },
    fixed_() {
      const { fixed, fdTableFixedProvider } = this;
      return fdTableFixedProvider.fixed != null ? fdTableFixedProvider.fixed : fixed;
    },
    style() {
      return this.fixed_
        ? {
            left: "0",
            width: "200px"
          }
        : {};
    },
    classes() {
      const { fixed_ } = this;
      if (!fixed_) {
        return null;
      }
      return {
        "fd-table__fixed-col": fixed_
      };
    }
  }
};
</script>
