
import Vue from "vue";
import Router from "vue-router";

import ButtonComponent from "./components/Button/Button.Component.vue";
import BadgeComponent from "./components/Badge/Badge.Component.vue";
import IconComponent from "./components/Icon/Icon.Component.vue";
import ImageComponent from "./components/Image/Image.Component.vue";
import IdentifierComponent from "./components/Identifier/Identifier.Component.vue";
import ModalComponent from "./components/Modal/Modal.Component.vue";
import TagComponent from "./components/Tag/Tag.Component.vue";

Vue.use(Router)

export default new Router ({
 
    routes: [
        // { path: '/actionBar', name: 'Action Bar', component: ActionBarComponent },
        // { path: '/alert', name: 'Alert', component: AlertComponent },
        { path: "/badge", name: "Badge and Label", component: BadgeComponent },
        // { path: '/breadcrumb', name: 'Breadcrumb', component: BreadcrumbComponent },
        { path: "/button", name: "Button", component: ButtonComponent },
        // { path: '/dropdown', name: 'Dropdown', component: DropdownComponent },
        // { path: '/forms', name: 'Forms', component: FormsComponent },
        { path: '/icon', name: 'Icon', component: IconComponent },
        { path: '/identifier', name: 'Identifier', component: IdentifierComponent },
        { path: '/image', name: 'Image', component: ImageComponent },
        // { path: '/inputGroup', name: 'Input Group', component: InputGroupComponent },
        // { path: '/listGroup', name: 'List Group', component: ListGroupComponent },
        // { path: '/megaMenu', name: 'Mage Menu', component: MegaMenuComponent },
        // { path: '/sideNavigation', name: 'Side Navigation', component: SideNavigationComponent },
        // { path: '/table', name: 'Table', component: TableComponent },
        // { path: '/tabs', name: 'Tabs', component: TabsComponent },
        { path: '/tag', name: 'Tag', component: TagComponent },
        // { path: '/tile', name: 'Tile', component: TileComponent },
        // { path: '/toggle', name: 'Toggle', component: ToggleComponent }
        { path: "/modal", name: "Modal", component: ModalComponent }
    ]

})
