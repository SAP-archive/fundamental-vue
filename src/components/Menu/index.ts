import Menu from './Menu.vue';
import MenuList from './MenuList.vue';
import MenuItem from './MenuItem.vue';
import { pluginify } from '@/util';
export default pluginify(Menu, MenuList, MenuItem);
export { Menu, MenuList, MenuItem };
