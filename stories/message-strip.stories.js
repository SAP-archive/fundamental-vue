import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

export default {
  title: 'Message Strip'
}

export const DefaultMessageStrip = () => require('./../src/docs/pages/message-strip/default.vue').default
export const Information = () => require('./../src/docs/pages/message-strip/information.vue').default
export const Error = () => require('./../src/docs/pages/message-strip/error.vue').default
export const Success = () => require('./../src/docs/pages/message-strip/success.vue').default
export const Warning = () => require('./../src/docs/pages/message-strip/warning.vue').default
export const Customized = () => require('./../src/docs/pages/message-strip/customized.vue').default
export const Dismiss = () => require('./../src/docs/pages/message-strip/dismiss.vue').default
