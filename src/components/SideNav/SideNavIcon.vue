<template>
  <span :class="classes" role="presentation" />
</template>
<script lang="ts">
import { Icon, mixins } from '@/mixins';
export default mixins(Icon).extend({
  name: 'FdSideNavIcon',
  computed: {
    classes(): string[] {
      const iconClass = this.iconClassName;
      const icon = iconClass == null ? [] : [iconClass];
      return [
        'fd-side-nav__icon',
        ...icon,
        'sap-icon--m',
      ];
    }
  },
});
</script>
