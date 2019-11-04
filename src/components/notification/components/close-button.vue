<script>
import Button from './../../button/button.vue'
export default {
  name: 'FdNotificationCloseButton',
  functional: true,
  render(h, context) {
    const props = {
      ...context.props,
      styling: 'light',
      icon: 'decline'
    }
    const data = {
      ...context.data,
      props,
      class: [context.data.class, 'fd-notification__close']
    }
    return h(Button, data, context.children)
  }
}
</script>
