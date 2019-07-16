<template>
  <fd-shell-bar>
    <fd-shell-bar-group position="start">
      <fd-shell-bar-logo style="display: flex;">
        <slot name="toggle" />
        <span class="product-name">Fundamental Vue</span>
      </fd-shell-bar-logo>
    </fd-shell-bar-group>
    <fd-shell-bar-group position="end">
      <fd-shell-bar-actions>
        <fd-shell-bar-action>
          <fd-popover ref="popover" with-arrow :flips="false" placement="bottom-end">
            <template #control="{toggle}">
              <fd-shell-bar-action-button icon="search" @click="toggle" />
            </template>
            <template #default>
              <d-component-picker @input="navigateToComponent" />
            </template>
          </fd-popover>
        </fd-shell-bar-action>
      </fd-shell-bar-actions>
    </fd-shell-bar-group>
  </fd-shell-bar>
</template>

<script>
import DComponentPicker from "./../../components/component-picker.vue";

export default {
  components: { DComponentPicker },
  methods: {
    navigateToComponent(key) {
      this.selectedComponent = key;
      if (key == null) {
        return;
      }
      const route = this.$componentApiRepository.routeForKey(key);
      this.$router.push(route);
      this.$refs.popover.hide();
    }
  },
  computed: {
    sidenavVisible: {
      get() {
        return this.sidenavVisibleModel.length === 1 && this.sidenavVisibleModel[0] === true;
      },
      set(visible) {
        this.sidenavVisibleModel = [visible];
      }
    }
  },
  data() {
    return {
      selectedComponentKey: null,
      sidenavVisibleModel: [true]
    };
  }
};
</script>

<style>
.product-name {
  color: white !important;
  font-weight: bold;
}
</style>
