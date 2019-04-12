import SideNavSubItem from "./SideNavSubItem.vue";
import SideNavSubLink from "./SideNavSubLink.vue";
import SideNavSubList from "./SideNavSubList.vue";
import SideNavGroupTitle from "./SideNavGroupTitle.vue";
import SideNavGroup from "./SideNavGroup.vue";
import SideNavIcon from "./SideNavIcon.vue";
import SideNavList from "./SideNavList.vue";
import SideNavLink from "./SideNavLink.vue";
import SideNavItem from "./SideNavItem.vue";
import SideNav from "./SideNav.vue";
import { pluginify } from "./../../util";

export default pluginify(
  SideNav,
  SideNavGroupTitle,
  SideNavGroup,
  SideNavIcon,
  SideNavList,
  SideNavItem,
  SideNavSubItem,
  SideNavLink,
  SideNavSubLink,
  SideNavSubList
);

export {
  SideNav,
  SideNavGroupTitle,
  SideNavGroup,
  SideNavIcon,
  SideNavList,
  SideNavItem,
  SideNavSubItem,
  SideNavLink,
  SideNavSubLink,
  SideNavSubList
};
