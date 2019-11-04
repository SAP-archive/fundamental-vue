import App from './app/app.vue'
import AppMain from './app/app-main.vue'
import AppNavigation from './app/app-navigation.vue'
import Shell from './shell/shell.vue'
import ShellHeader from './shell/shell-header.vue'
import ShellApp from './shell/shell-app.vue'
import ShellFooter from './shell/shell-footer.vue'
import pluginify from './../../util/pluginify'

export default pluginify(App, AppMain, AppNavigation, Shell, ShellHeader, ShellFooter, ShellApp)

export { App, AppMain, AppNavigation, Shell, ShellHeader, ShellFooter, ShellApp }
