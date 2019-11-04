import TextInput from './text-input.vue'
import Select from './select.vue'
import Textarea from './textarea.vue'
import Toggle from './toggle.vue'
import Checkbox from './checkbox.vue'
import Radio from './radio.vue'

import pluginify from './../../util/pluginify'
export default pluginify(TextInput, Select, Textarea, Toggle, Checkbox, Radio)

export { default as TextInput } from './text-input.vue'
export { default as Select } from './select.vue'
export { default as Textarea } from './textarea.vue'
export { default as Toggle } from './toggle.vue'
export { default as Checkbox } from './checkbox.vue'
export { default as Radio } from './radio.vue'
