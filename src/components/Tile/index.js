import Tile from "./Tile.vue";
import ProductTile from "./ProductTile.vue";
import { pluginify } from "./../../util";
export default pluginify(Tile, ProductTile);
export { Tile, ProductTile };
