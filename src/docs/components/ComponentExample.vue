<template>
  <div class='component-example'>
    <h1 v-font-weight:light v-type:4 class='example-title'>
      {{title}}
      <Button
        compact
        styling='light'
        type='standard'
        class='fullscreen-demo-button'
        icon='popup-window'
        @click="showExampleStandalone"
      />
    </h1>

    <div v-if="docs !== ''" class='docs rendered-markdown' v-html="docs" />
    <Panel condensed condensedFooter>
      <div v-if="tip" class='tip'>
        <div class='tip-title'>TIP</div>
        <div class='tip-body' v-html="tip" />
      </div>
      <div class='component'>
        <div
          v-if="fullscreenOnly"
          class='component__default-margin'
          style='display: flex; justify-content: center;'
        >
          <Button
            style='margin-left: auto; margin-right: auto;'
            type='standard'
            icon='popup-window'
            @click="showExampleStandalone"
          >
            Show Demo
          </Button>
        </div>
        <component
          v-else
          :class="condensed ? 'component__condensed' : 'component__default-margin'"
          :is="component"
        />
      </div>
      <div slot='footer' class='footer'>
        <div
          class='example__show_code'
          role='button'
          @click="toggleCodeVisibility"
        >
          <a href='#'>
            <i :class="toggleCodeVisbilityIcon" />
            <span style='margin-left: 4px; line-height: 44px; font-size: 13px;'>
              {{toggleCodeVisbilityTitle}}
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
    </Panel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Button, Panel } from '@/components';

export default Vue.extend({
  name: 'ComponentExample',
  components: { Button, Panel },
  props: {
    exampleId: { type: String, required: true },
    tip: String,
    docs: { type: String, default: '' },
    title: { type: String, default: '' },
    condensed: { type: Boolean, default: false },
    fullscreenOnly: { type: Boolean, default: false },
    isFullscreenExample: { type: Boolean, default: false },
    component: Object,
    sourcecode: String,
  },
  computed: {
    toggleCodeVisbilityIcon(): string[] {
      return [`sap-icon--navigation-${this.codeVisible ? 'up' : 'down'}-arrow`, 'sap-icon--s'];
    },
    toggleCodeVisbilityTitle(): string {
      return this.codeVisible ? 'Hide Code' : 'Show Code';
    }
  },
  data() {
    return {
      codeVisible: false,
    };
  },
  methods: {
    toggleCodeVisibility(event: Event) {
    event.preventDefault();
    this.codeVisible = !this.codeVisible;
    },
    showExampleStandalone() {
      const routeData = this.$router.resolve({
        name: 'example-demo',
        params: { id: this.exampleId },
      });
      window.open(routeData.href, '__blank')
    }
  },
})
</script>

<style scoped lang="sass">

.component-example
  padding: 30px 30px 30px 30px
  .example-title
    color: #555555
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
    padding: 1.5rem
    margin-top: 1em
    border-bottom: 1px solid #ebebeb
    .tip-title
      font-weight: 600
      font-size: 16px
      line-height: 1.7
    .tip-body
      margin-top: 1em
      margin-bottom: 1em
      font-size: 16px
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
  padding: 10px

</style>
