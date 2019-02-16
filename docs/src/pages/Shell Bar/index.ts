import { ExampleCollectionFunction } from "../types";

export const plugin: ExampleCollectionFunction = () => {
  return {
    status: "experimental",
    icon: "header",
    related: [
      "FdShellBar",
      "FdShellBarGroup",
      "FdShellBarProduct",
      "FdShellBarProductMenu",
      "FdShellBarProductTitle",
      "FdShellBarLogo",
      "FdShellBarSubtitle",
      "FdShellBarActions",
      "FdShellBarAction",
      "FdShellBarUserMenu",
      "FdShellBarProductSwitcher",
      "FdShellBarProductSwitcherItem",
      "FdShellBarProductSwitcherItemImg",
      "FdShellBarProductSwitcherItemTitle"
    ]
  };
};
