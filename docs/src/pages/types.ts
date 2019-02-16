import { VueConstructor } from "vue";
import { IconName } from "@/lib";

type ExampleCollectionPlugin = {
  related?: string[];
  icon?: IconName;
  status?: string;
};

export type ExampleCollectionFunction = () => ExampleCollectionPlugin;
