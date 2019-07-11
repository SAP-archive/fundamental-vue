<template>
  <div class="component-example">
    <h3 v-fd-font-weight:light v-fd-type:4 class="example-title">
      {{ title }}
      <FdButton
        compact
        styling="light"
        type="standard"
        class="fullscreen-demo-button"
        icon="popup-window"
        @click="showExampleStandalone"
      />
    </h3>

    <div v-if="docs !== ''" class="docs rendered-markdown" v-html="docs" />
    <FdPanel condensed condensedFooter>
      <div v-if="tip" class="tip">
        <div class="tip-title">TIP</div>
        <div class="tip-body" v-html="tip" />
      </div>
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
          :is="component"
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
        <expand-transition>
          <div v-show="codeVisible" class="codeContainer">
            <!-- Needs to be wrapped again for the transition to look nice. -->
            <div>
              <code-view :key="title" :sourcecode="sourcecode" />
            </div>
          </div>
        </expand-transition>
      </div>
    </FdPanel>
  </div>
</template>

<script>
export default {
  name: "ComponentExample",
  props: {
    exampleId: { type: String, required: true },
    tip: String,
    docs: { type: String, default: "" },
    title: { type: String, default: "" },
    condensed: { type: Boolean, default: false },
    fullscreenOnly: { type: Boolean, default: false },
    isFullscreenExample: { type: Boolean, default: false },
    component: Object,
    sourcecode: String
  },
  computed: {
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
  data() {
    return {
      codeVisible: false
    };
  },
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
  .tip
    background-color: red
    border-left: 0.5rem solid #42b983
    background-color: #f3f5f7
    padding: 10px
    border-bottom: 1px solid #ebebeb
    .tip-title
      font-weight: 600
      font-size: 16px
      line-height: 1.7
      padding-left: 20px
    .tip-body
      font-size: 16px
      padding: 20px
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
  background-color: white
  border-top: 1px solid #eeeeef
  padding: 10px
</style>
