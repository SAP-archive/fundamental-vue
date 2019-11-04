import Tree from './tree.vue'
import TreeItem from './item.vue'
import TreeRow from './row.vue'
import TreeCol from './col.vue'
import TreeControl from './control.vue'
import TreeControlCol from './control-col.vue'
import TreeGroup from './group.vue'

import pluginify from '../../util/pluginify'

export default pluginify(Tree, TreeItem, TreeRow, TreeCol, TreeControl, TreeControlCol, TreeGroup)
export { Tree, TreeItem, TreeRow, TreeCol, TreeControl, TreeControlCol, TreeGroup }
