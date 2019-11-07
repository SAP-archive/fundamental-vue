declare type LayoutType = "full" | "none";
declare type VirtualizedListSupportType = "with-ie11" | "without-ie11" | "none";

declare type FdPluginOptions = {
  layoutType: LayoutType;
  virtualizedListSupportType: VirtualizedListSupportType;
};

declare type RawConfigOptions = {
  layoutType?: LayoutType;
  virtualizedListSupportType?: VirtualizedListSupportType;
}

declare type NormalizedConfig = {
  layoutType: LayoutType;
  virtualizedListSupportType: VirtualizedListSupportType;
  dependenciesList:  Dependency[] ;
  devDependenciesList: Dependency[] ;
  successMessage: string;
}

export interface Dependency {
  name: string;
  version: string;
}