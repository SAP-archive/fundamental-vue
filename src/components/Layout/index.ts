export * from './Shell';
export * from './ShellBar';
export * from './App';

import Container from './Container.vue';
import Col from './Col.vue';
import Section from './Section.vue';
import Ui from './Ui.vue';
import App from './App/App.vue';
import AppMain from './App/AppMain.vue';
import AppNavigation from './App/AppNavigation.vue';

import { pluginify } from '@/util';
export default pluginify(Container, Col, Section, Ui, App, AppMain, AppNavigation);
export { Container, Col, Section, Ui, App, AppMain, AppNavigation };
