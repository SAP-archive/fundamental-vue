import pluginify from './../../util/pluginify'
import NotificationActions from './components/actions.vue'
import NotificationAvatar from './components/avatar.vue'
import NotificationBody from './components/body.vue'
import NotificationCloseButton from './components/close-button.vue'
import NotificationContent from './components/content.vue'
import NotificationDescription from './components/description.vue'
import NotificationFooter from './components/footer.vue'
import NotificationHeader from './components/header.vue'
import NotificationIndicator from './components/indicator.vue'
import NotificationMeta from './components/meta.vue'
import NotificationText from './components/text.vue'
import NotificationTitle from './components/title.vue'
import Notification from './_notification.vue'

export default pluginify(
  Notification,
  NotificationActions,
  NotificationAvatar,
  NotificationBody,
  NotificationContent,
  NotificationCloseButton,
  NotificationDescription,
  NotificationFooter,
  NotificationHeader,
  NotificationIndicator,
  NotificationMeta,
  NotificationText,
  NotificationTitle
)

export {
  Notification,
  NotificationActions,
  NotificationAvatar,
  NotificationBody,
  NotificationContent,
  NotificationCloseButton,
  NotificationDescription,
  NotificationFooter,
  NotificationHeader,
  NotificationIndicator,
  NotificationMeta,
  NotificationText,
  NotificationTitle
}
