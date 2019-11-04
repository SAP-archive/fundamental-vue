import Tabs from './tabs.vue'
import TabItem from './item.vue'
import TabsLink from './link.vue'
import pluginify from './../../util/pluginify'
export default pluginify(Tabs, TabItem, TabsLink)
export { Tabs, TabItem, TabsLink }
