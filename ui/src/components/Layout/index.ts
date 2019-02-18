import Container from "./Container.vue";
import Col from "./Col.vue";
import Section from "./Section.vue";
import Ui from "./Ui.vue";
import App from "./App/App.vue";
import AppMain from "./App/AppMain.vue";
import AppNavigation from "./App/AppNavigation.vue";
import Shell from "./Shell/Shell.vue";
import ShellHeader from "./Shell/ShellHeader.vue";
import ShellFooter from "./Shell/ShellFooter.vue";
import * as ShellBar from "./ShellBar";
import { pluginify, objectValues } from "@/util";

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
  ShellFooter
};
