<template>
  <!-- eslint-disable vue/no-parsing-error -->
  <% if(options.fullLayout) { %>
  <fd-shell>
    <fd-shell-header>
      <shell-bar />
    </fd-shell-header>
    <fd-app>
      <!-- inline style needed to work around a bug -->
      <fd-app-navigation style="min-width: 250px;" orientation="vertical">
        <fd-side-nav>
          <fd-nested-list>
            <template #item="item">
              <fd-nested-list-item>
                <fd-nested-list-link :to="item.to">
                  <fd-nested-list-icon :icon="item.icon" />
                  {{ item.name }}
                </fd-nested-list-link>
              </fd-nested-list-item>
            </template>
          </fd-nested-list>
        </fd-side-nav>
      </fd-app-navigation>
      <fd-app-main>
        <router-view />
      </fd-app-main>
    </fd-app>
  </fd-shell> <% } else {  %> <div id="app">
    <div v-padding:medium style="text-align: center;">
      <fd-panel title="Fundamental Vue">
        <p>
          You should see an
          <code>fd-but ton</code> below.
        </p>
        <fd-button v-margin:medium>fd-button</fd-button>

        <p
          slot="footer"
        >Fundamental Vue is installed gobally. This means you can use any Fundamental Vue component without local registration.</p>
      </fd-panel>
    </div>
  </div> <% } %>
</template>

<script>
  <% if(options.fullLayout) { %>import ShellBar from "@/components/ShellBar.vue";<% }%>
export default {
  name: "App",
  <% if(options.fullLayout) { %> components: { ShellBar },
  data() {
    return {
      navigationItems: [
        { name: "Home", icon: "home", to: { name: "home" } },
        {
          name: "About",
          icon: "sap-logo-shape",
          to: { name: "about" }
        }
      ]
    };
  }
  <% }%>
};
</script>