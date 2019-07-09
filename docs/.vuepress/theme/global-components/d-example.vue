<template>
  <div class="component-example">
    <FdPanel condensed condensedFooter>
      <div class="component">
        <div
          v-if="fullscreenOnly"
          class="component__default-margin"
          style="display: flex; justify-content: center;"
        >
          <FdButton
            style="margin-left: auto; margin-right: auto;"
            type="standard"
            icon="popup-window"
            @click="showExampleStandalone"
          >
            Show Demo
          </FdButton>
        </div>
        <component
          v-else
          :class="
            condensed ? 'component__condensed' : 'component__default-margin'
          "
          :is="exampleComponent"
        />
      </div>
      <div slot="footer" class="footer">
        <div
          class="example__show_code"
          role="button"
          @click="toggleCodeVisibility"
        >
          <a href="#">
            <i :class="toggleCodeVisbilityIcon" />
            <span style="margin-left: 4px; line-height: 44px; font-size: 13px;">
              {{ toggleCodeVisbilityTitle }}
            </span>
          </a>
        </div>
        <d-expand-transition>
          <div v-show="codeVisible" class="codeContainer">
            <!-- Needs to be wrapped again for the transition to look nice. -->
            <div>
              <d-code-view :sourcecode="code" />
            </div>
          </div>
        </d-expand-transition>
      </div>
    </FdPanel>
  </div>
</template>

<script>
export default {
  props: ["filename"],
  methods: {
    toggleCodeVisibility(event) {
      event.preventDefault();
      this.codeVisible = !this.codeVisible;
    },
    showExampleStandalone() {
      const routeData = this.$router.resolve({
        name: "example-demo",
        params: { id: this.exampleId }
      });
      window.open(routeData.href, "__blank");
    }
  },
  computed: {
    code() {
      const example = this.$page.fdExamplesByName[this.filename];
      if(example == null) {return ""}
      return example.content;
    },
    exampleComponent() {
      const pagePath = this.$page.path;
      const [, dirName] = pagePath
        .split("/")
        .filter(component => component.length > 0);
      return `examples-${dirName}-${this.filename}`;
    },
    toggleCodeVisbilityIcon() {
      return [
        `sap-icon--navigation-${this.codeVisible ? "up" : "down"}-arrow`,
        "sap-icon--s"
      ];
    },
    toggleCodeVisbilityTitle() {
      return this.codeVisible ? "Hide Code" : "Show Code";
    }
  },
  mounted() {
    const pagePath = this.$page.path;
    const [, dirName] = pagePath
      .split("/")
      .filter(component => component.length > 0);
    const vueComponentPath = `${pagePath}${this.filename}.vue`;
    const key = `./${dirName}/${this.filename}.vue`;
    // import(
    //   /* webpackChunkName: "demo-src" */
    //   /* webpackMode: "lazy-once" */
    //   `!!raw-loader!./../../components/examples/${dirName}/${this.filename}.vue`
    // ).then(code => {
    //   this.code = code.default;
    // });
  },
  data() {
    return {
      codeVisible: false,
      component: null,
      // code: null,
      condensed: false,
      fullscreenOnly: false
    };
  }
};
</script>

<style lang="sass">
.component-example
  padding: 0px
  margin-bottom: 40px
  .example-title
    color: #888888
  .example__show_code
    color: #aaaaaa
    cursor: pointer
    text-align: center
    background-color: rgb(250, 250, 250)
    a
      color: #aaaaaa
      outline: 0
      &:hover
        color: blue
  .fullscreen-demo-button
    display: inline-block
    float: right
  .footer
    width: 100%
    display: block
  .component
    .component__default-margin
      padding: 30px
    .component__condensed
      padding: 0px
  .docs
    font-size: 1.2em
    margin-bottom: 12px

.codeContainer
  background-color: rgb(250, 250, 250)
  border-top: 1px solid #eeeeef
  padding: 0px
</style>
