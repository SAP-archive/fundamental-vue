import TabBar from './tab-bar.vue'
import TabBarItem from './item.vue'
import TabBarLink from './link.vue'

import pluginify from '../../util/pluginify'

export default pluginify(TabBar, TabBarItem, TabBarLink)
export { TabBar, TabBarItem, TabBarLink }
