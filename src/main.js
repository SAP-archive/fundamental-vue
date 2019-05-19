import FundamentalVuePlugin from "./components";
import Directives from "./directives";
import { normalizedPluginOptions } from "./util/PluginOptions";
import { log } from "./core";

const FD_AUTO_INSTALL_DISABLED_KEY = "__FD_AUTO_INSTALL_DISABLED_KEY__";

const install = (vue, options) => {
  const normalized = normalizedPluginOptions(options);
  vue.prototype.$fdDefaultPortalId = normalized.defaultPortalId;
  vue.use(Directives, normalized);
  vue.use(FundamentalVuePlugin, normalized);
  if (normalized.log.welcome) {
    log(
      `%c Welcome to Fundamental Vue %c You are – yay. %c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#1661be ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  }
};

const installIfPossible = () => {
  if (typeof window !== undefined && window.Vue) {
    // Check if auto install was disabled
    if (window[FD_AUTO_INSTALL_DISABLED_KEY] === true) {
      return;
    }
    install(window.Vue);
  }
};

installIfPossible();

export default install;
