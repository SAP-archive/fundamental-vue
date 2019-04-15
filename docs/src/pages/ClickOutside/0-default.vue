<title>Click Outside Directive</title>
<tip>The `on-click-outside`-directive is private and should not be used by app. It may be properly exposed at some point in the future.</tip>
<docs>You can use the directive `v-on-click-outside` in order to detect clicks outside of a specific component/element.</docs>
<tip>Use `v-is-inside`, in order to mark additional elements/components as being part of the inside. Anything marked with `v-is-inside` won't cause the outside-hanlder to be called.</tip>

<template>
  <div>
    <FdAlert :dismissible="false">
      {{ message }}
    </FdAlert>
    <br /><br />
    <div class="outside">
      <p>this is where the <strong>outside</strong> starts</p>
      <div
        class="inside"
        v-on-click-outside="clickOutside"
        @click="message = 'Click inside detected.'"
      >
        <p>
          <strong>inside:</strong> Clicks will not trigger a
          <em>clickOutside</em>-event.
        </p>
      </div>
      <div
        class="inside"
        v-is-inside
        @click="message = 'Click inside detected.'"
      >
        <p>
          <strong>inside:</strong> even though it is not inside a
          <code>v-on-click-outside</code>-container.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ clickOutsideContext: "context", message: "Click somewhere." }),
  methods: {
    clickOutside() {
      this.message = "Click outside detected.";
    }
  }
};
</script>

<style scoped>
.outside > * {
  margin: 30px 0;
}

.inside {
  border: 1px solid #aaaaaa;
  background-color: #fefefe;
  color: black;
  text-align: center;
  vertical-align: middle;
  padding: 20px;
}
.outside {
  border: 1px solid #aaaaaa;
  background-color: #fefefe;
  color: black;
  text-align: center;
  vertical-align: middle;
  padding: 20px;
}
</style>
