import { pluginify } from "./../../util";
import { shortUuid } from "../../lib/uuid";
import { eventsBus, events } from "./EventsBus";
import Notifications from "./Notifications.vue";

export default pluginify(Notifications);

export { Notifications };

export const FdNotificationsManager = {
  install(Vue, args = {}) {
    /** @typedef { import('./notifications.types').NewNotificationOpts } NewNotificationOpts */
    const service = {
      /**
       * @returns {String}
       * @param {NewNotificationOpts} params
       */
      show: params => {
        params = { id: shortUuid(), ...params };
        eventsBus.$emit(events.show, params);
        return params.id;
      },
      /**
       * @param {NewNotificationOpts} params
       */
      hide: params => {
        eventsBus.$emit(events.hide, params);
      },

      hideAll: group => {
        eventsBus.$emit(events.hideAll, group);
      }
    };

    const name = args.name || "fdNotifications";

    Vue[name] = service;

    Vue.prototype["$" + name] = service;
  }
};
