import InputGroup from './input-group.vue'
import InputGroupAddon from './addon.vue'
import InputGroupButton from './button.vue'
import InputGroupAddonButton from './addon-button.vue'
import InputGroupInput from './input.vue'

import pluginify from './../../util/pluginify'

export default pluginify(
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
  InputGroupAddonButton
)

export { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton, InputGroupAddonButton }
