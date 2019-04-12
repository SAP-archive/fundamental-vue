<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script>
const typeMapping = {
  warning: "warning",
  error: "error",
  success: "success"
};

const statusIconMapping = {
  available: "available",
  away: "away",
  busy: "busy",
  offline: "offline"
};

const StatusTypes = Object.keys(typeMapping);
const isStatusType = value => StatusTypes.indexOf(value) >= 0;

const StatusIconTypes = Object.keys(statusIconMapping);
const isStatusIcon = value => StatusIconTypes.indexOf(value) >= 0;

export default {
  name: "FdStatus",
  props: {
    statusIcon: { type: String, default: null, validator: isStatusIcon },
    type: { type: String, default: null, validator: isStatusType },
    icon: { type: String, default: null }
  },
  computed: {
    iconClasses() {
      const icon = this.icon;
      if (icon == null) {
        return {};
      }
      return {
        [`sap-icon--${icon}`]: true
      };
    },
    classes() {
      return {
        "fd-status-label": true,
        "fd-status-label--success": this.type === "success",
        "fd-status-label--warning": this.type === "warning",
        "fd-status-label--error": this.type === "error",
        "fd-status-label--available": this.statusIcon === "available",
        "fd-status-label--away": this.statusIcon === "away",
        "fd-status-label--busy": this.statusIcon === "busy",
        "fd-status-label--offline": this.statusIcon === "offline",
        ...this.iconClasses
      };
    }
  }
};
</script>
