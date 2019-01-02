import { iconClass, IconName } from '@/lib';
import Vue from 'vue';

export interface IconProps {
  icon?: IconName;
}

export const IconMixin = Vue.extend({
  props: {
    icon: { type: String, default: null },
  },
  computed: {
    iconClassName(): string | null {
      const icon = this.icon;
      if(icon == null) {
        return null;
      }
      return iconClass(icon);
    },
  },
});
