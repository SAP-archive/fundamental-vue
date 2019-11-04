import Breadcrumb from './breadcrumb.vue'
import BreadcrumbItem from './item.vue'
import BreadcrumbLink from './link.vue'
import pluginify from './../../util/pluginify'
export default pluginify(Breadcrumb, BreadcrumbItem, BreadcrumbLink)
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink }
