export { default as ShellBar } from './shell-bar.vue'
export { default as ShellBarGroup } from './group.vue'
export { default as ShellBarProductGroup } from './groups/product.vue'
export { default as ShellBarActionsGroup } from './groups/actions.vue'
export { default as ShellBarLogo } from './logo.vue'
export { default as ShellBarLogoImage } from './logo-image.vue'
export { default as ShellBarSubtitle } from './subtitle.vue'
export { default as ShellBarProduct } from './product.vue'
export { default as ShellBarProductTitle } from './product-title.vue'
export { default as ShellBarProductMenu } from './product-menu.vue'
export { default as ShellBarActions } from './actions.vue'
export { default as ShellBarAction } from './action.vue'
export { default as ShellBarUserMenu } from './user-menu.vue'
export { default as ShellBarUserMenuControl } from './user-menu-control.vue'
export { default as ShellBarActionButton } from './action-button.vue'

import ShellBar from './shell-bar.vue'
import Group from './group.vue'
import ProductGroup from './groups/product.vue'
import ActionsGroup from './groups/actions.vue'
import Logo from './logo.vue'
import LogoImage from './logo-image.vue'
import Subtitle from './subtitle.vue'
import Product from './product.vue'
import ProductTitle from './product-title.vue'
import ProductMenu from './product-menu.vue'
import Actions from './actions.vue'
import Action from './action.vue'
import UserMenu from './user-menu.vue'
import UserMenuControl from './user-menu-control.vue'
import ActionButton from './action-button.vue'

import pluginify from './../../util/pluginify'

export default pluginify(
  ShellBar,
  Group,
  ProductGroup,
  ActionsGroup,
  Logo,
  LogoImage,
  Subtitle,
  Product,
  ProductTitle,
  ProductMenu,
  Action,
  Actions,
  UserMenu,
  UserMenuControl,
  ActionButton
)
