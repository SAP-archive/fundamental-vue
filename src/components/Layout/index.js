import Container from "./Container.vue";
import Col from "./Col.vue";
import Section from "./Section.vue";
import Ui from "./Ui.vue";
import App from "./App/_app.vue";
import AppMain from "./App/app-main.vue";
import AppNavigation from "./App/app-navigation.vue";
import Shell from "./Shell/_shell.vue";
import ShellHeader from "./Shell/shell-header.vue";
import ShellApp from "./Shell/shell-app.vue";
import ShellFooter from "./Shell/shell-footer.vue";
import * as ShellBar from "./ShellBar";
import { pluginify, objectValues } from "./../../util";

export default pluginify(
  Container,
  Col,
  Section,
  Ui,
  App,
  AppMain,
  AppNavigation,
  Shell,
  ShellHeader,
  ShellFooter,
  ShellApp,
  ...objectValues(ShellBar)
);

export {
  Container,
  Col,
  Section,
  Ui,
  App,
  AppMain,
  AppNavigation,
  Shell,
  ShellHeader,
  ShellFooter,
  ShellApp
};
