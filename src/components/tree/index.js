import Tree from "./Tree.vue";
import TreeItem from "./TreeItem.vue";

import { pluginify } from "../../util";

export default pluginify(Tree, TreeItem);
export { Tree, TreeItem };
