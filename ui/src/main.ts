import FundamentalVuePlugin from "@/components";
import Directives from "@/directives";
import { normalizedPluginOptions } from "@/util/PluginOptions";
import { log } from "@/core";
import { version, libName } from "@/config";
import { VueConstructor } from "vue";

const FD_AUTO_INSTALL_DISABLED_KEY = "__FD_AUTO_INSTALL_DISABLED_KEY__";

const install = (vue: VueConstructor, options: any) => {
  const normalized = normalizedPluginOptions(options);
  vue.use(Directives, normalized);
  vue.use(FundamentalVuePlugin, normalized);
  if (normalized.log.welcome) {
    log(
      `%c Welcome to ${libName} %c Detected v${version} %c`,
      "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
      "background:#1661be ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
      "background:transparent"
    );
  }
};

const installIfPossible = () => {
  // @ts-ignore
  if (typeof window !== undefined && window.Vue && window.Vue === Vue) {
    // Check if auto install was disabled
    // @ts-ignore
    if (window[FD_AUTO_INSTALL_DISABLED_KEY] === true) {
      return;
    }
    // @ts-ignore
    install(window.Vue);
  }
};

installIfPossible();

export default install;
