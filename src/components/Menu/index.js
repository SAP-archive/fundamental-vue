import Menu from "./Menu.vue";
import MenuList from "./MenuList.vue";
import MenuItem from "./MenuItem.vue";
import MenuLink from "./MenuLink.vue";
import { pluginify } from "./../../util";
export default pluginify(Menu, MenuLink, MenuList, MenuItem);
export { Menu, MenuList, MenuLink, MenuItem };
