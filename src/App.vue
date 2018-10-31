<template>
  <div id="app">
    <div class="container">
      <div class="sidebar">
        <h1 class="logo">FUNDAMENTAL VUE</h1>
        <ul class="nav">
          <li class="side-nav__headers">Components</li>
          <li v-for="route in routes" :key="route.path">
            <router-link class="nav-item" :to="route.path">{{route.name}}</router-link>
          </li>
        </ul>
      </div>

      <div class="content">
        <div class="content-margin">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: { },
  data() {
    return {
      routes: [
        // { path: '/actionBar', name: 'Action Bar' },
        // { path: '/alert', name: 'Alert' },
        { path: "/badge", name: "Badge, Label and Status" },
        // { path: '/breadcrumb', name: 'Breadcrumb' },
        { path: "/button", name: "Button" },
        // { path: '/dropdown', name: 'Dropdown' },
        // { path: '/forms', name: 'Forms' },
        { path: '/icon', name: 'Icon' },
        { path: '/identifier', name: 'Identifier' },
        { path: '/image', name: 'Image' },
        // { path: '/inputGroup', name: 'Input Group' },
        // { path: '/listGroup', name: 'List Group'},
        // { path: '/megaMenu', name: 'Mage Menu' },
        // { path: '/sideNavigation', name: 'Side Navigation' },
        // { path: '/table', name: 'Table' },
        // { path: '/tabs', name: 'Tabs' },
        { path: '/tag', name: 'Tag' },
        // { path: '/tile', name: 'Tile' },
        // { path: '/toggle', name: 'Toggle' }
        { path: "/modal", name: "Modal" },
        ]
    }
  }
};
</script>

<style lang="scss" src='./App.scss'>
</style>
