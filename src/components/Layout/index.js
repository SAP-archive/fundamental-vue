import App from "./App/app.vue";
import AppMain from "./App/app-main.vue";
import AppNavigation from "./App/app-navigation.vue";
import Shell from "./Shell/shell.vue";
import ShellHeader from "./Shell/shell-header.vue";
import ShellApp from "./Shell/shell-app.vue";
import ShellFooter from "./Shell/shell-footer.vue";
import * as ShellBar from "./ShellBar";
import { pluginify, objectValues } from "./../../util";

export default pluginify(
  App,
  AppMain,
  AppNavigation,
  Shell,
  ShellHeader,
  ShellFooter,
  ShellApp,
  ...objectValues(ShellBar)
);

export { App, AppMain, AppNavigation, Shell, ShellHeader, ShellFooter, ShellApp };
