import Menu from './menu.vue'
import MenuList from './menu-list.vue'
import MenuItem from './menu-item.vue'
import MenuLink from './menu-link.vue'
import pluginify from './../../util/pluginify'
export default pluginify(Menu, MenuLink, MenuList, MenuItem)
export { Menu, MenuList, MenuLink, MenuItem }
