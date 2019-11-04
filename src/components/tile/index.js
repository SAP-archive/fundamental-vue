import Tile from './tile.vue'
import ProductTile from './product-tile.vue'
import pluginify from './../../util/pluginify'
export default pluginify(Tile, ProductTile)
export { Tile, ProductTile }
