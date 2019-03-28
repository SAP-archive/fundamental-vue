import { pluginify } from "@/util";
import ShellBar from "./ShellBar.vue";
import ShellBarGroup from "./ShellBarGroup.vue";
import ShellBarLogo from "./ShellBarLogo.vue";
import ShellBarSubtitle from "./ShellBarSubtitle.vue";
import ShellBarProduct from "./ShellBarProduct.vue";
import ShellBarProductTitle from "./ShellBarProductTitle.vue";
import ShellBarProductMenu from "./ShellBarProductMenu.vue";
import ShellBarActions from "./ShellBarActions.vue";
import ShellBarAction from "./ShellBarAction.vue";
import ShellBarUserMenu from "./ShellBarUserMenu.vue";
import ShellBarActionButton from "./ShellBarActionButton.vue";
import ShellBarProductSwitcher from "./ShellBarProductSwitcher.vue";
import ShellBarProductSwitcherItem from "./ShellBarProductSwitcherItem.vue";
import ShellBarProductSwitcherItemImg from "./ShellBarProductSwitcherItemImg.vue";
import ShellBarProductSwitcherItemTitle from "./ShellBarProductSwitcherItemTitle.vue";

export default pluginify(
  ShellBar,
  ShellBarGroup,
  ShellBarLogo,
  ShellBarSubtitle,
  ShellBarProduct,
  ShellBarProductTitle,
  ShellBarProductMenu,
  ShellBarActions,
  ShellBarAction,
  ShellBarUserMenu,
  ShellBarActionButton,
  ShellBarProductSwitcher,
  ShellBarProductSwitcherItem,
  ShellBarProductSwitcherItemImg,
  ShellBarProductSwitcherItemTitle
);
