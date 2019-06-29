<script>
import FdButton from "./../Button/Button.vue";

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
