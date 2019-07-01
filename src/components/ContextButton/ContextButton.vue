<script>
import FdButton from "./../Button/Button.vue";

// Context button component – should be used together with `fd-context-menu`. This component extends `fd-button`. Thus is can use used just like any other `fd-button`. It simply comes with a different set of defaults.
export default {
  name: "FdContextButton",
  extends: FdButton,
  props: {
    styling: {
      default: "light"
    },
    icon: {
      default: "overflow"
    }
  }
};
</script>
