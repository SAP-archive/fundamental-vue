import TimeControl from './control.vue'
import TimeInput from './input.vue'
import TimeItem from './item.vue'
import Time from './time.vue'
import pluginify from './../../util/pluginify'
export default pluginify(Time, TimeItem, TimeInput, TimeControl)
export { Time, TimeItem, TimeInput, TimeControl }
