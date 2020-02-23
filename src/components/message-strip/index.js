// @ts-check
// @ts-ignore
import MessageStrip from './message-strip.vue'
// @ts-ignore
import MessageStripBloseButton from './close.vue'
// @ts-ignore
import MessageStripText from './text.vue'
import pluginify from './../../util/pluginify'
export default pluginify(MessageStrip, MessageStripBloseButton, MessageStripText)
export { MessageStrip, MessageStripBloseButton, MessageStripText }
