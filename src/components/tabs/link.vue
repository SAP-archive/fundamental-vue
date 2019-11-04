<template>
  <a
    class="fd-tabs__link"
    :aria-controls="uid"
    :aria-selected="String(active)"
    :aria-disabled="String(disabled)"
    role="tab"
    ><slot
  /></a>
</template>

<script>
export default {
  name: 'FdTabsLink',
  props: {
    uid: String,
    active: Boolean,
    disabled: Boolean
  }
}
//  'a',
//         {
//           class: 'fd-tabs__link',
//           attrs: {
//             'aria-controls': this.uid,
//             'aria-selected': active,
//             'aria-disabled': this.disabled,
//             role: 'tab'
//           },
//           on: {
//             click: this.onClick,
//             keyup: this.onKeyup
//           }
//         },
</script>
