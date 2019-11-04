import SplitView from './split-view.vue'
import SplitViewDetail from './detail.vue'
import SplitViewMaster from './master.vue'
import pluginify from './../../util/pluginify'

pluginify(SplitView, SplitViewDetail, SplitViewMaster)

export default SplitView

export { SplitView, SplitViewDetail, SplitViewMaster }
