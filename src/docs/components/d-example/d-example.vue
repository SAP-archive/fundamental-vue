<template>
  <div class="fdd-example">
    <div>
      <div class="component">
        <div class="fdd-example__rendered">
          <div
            v-if="fullscreenOnly"
            class="component__default-margin"
            style="display: flex; justify-content: center;"
          >
            <RouterLink :to="toFullscreen">
              <FdButton
                style="margin-left: auto; margin-right: auto;"
                type="standard"
                icon="popup-window"
              >
                Show Demo
              </FdButton>
            </RouterLink>
          </div>
          <component v-else ref="component" :is="exampleComponent" />
        </div>
      </div>
      <DExampleToolbar class="fdd-example__toolbar" :class="toolbarClasses">
        <template #items-left>
          <DToolbarItem @click="codeVisible = !codeVisible" :icon="toggleCodeVisbilityIcon">
            {{ toggleCodeVisbilityTitle }}
          </DToolbarItem>
        </template>
        <template #items-right>
          <DToolbarItem v-show="codeVisible" title="Copy Code" @click="copyCode" icon="copy">
            Copy
          </DToolbarItem>
          <RouterLink title="Show Example in Fullscreen" target="_blank" :to="toFullscreen">
            <DToolbarItem icon="full-screen">Fullscreen</DToolbarItem>
          </RouterLink>
          <DPlaygroundButton :getCode="codeTextContent" />
        </template>
      </DExampleToolbar>
      <div>
        <expand-transition>
          <div v-show="codeVisible" ref="code" class="fdd-example__code">
            <component :is="srcComponent" />
          </div>
        </expand-transition>
      </div>
    </div>
  </div>
</template>

<script>
import DExampleToolbar from './toolbar.vue'
import camelized from './../../util/camelized'
import toPascalCase from './../../util/to-pascal-case'
import DToolbarItem from './d-toolbar-item.vue'
import DPlaygroundButton from './../d-playground-button/d-playground-button.vue'

export default {
  name: 'ComponentExample',
  components: { DPlaygroundButton, DExampleToolbar, DToolbarItem },
  props: {
    condensed: { type: Boolean, default: false },
    fullscreenOnly: { type: Boolean, default: false },
    isFullscreenExample: { type: Boolean, default: false },
    name: String
  },
  async mounted() {
    await this.$nextTick()
    const { component } = this
    if (component == null) {
      return
    }
    const meta = component._meta
    if (meta == null) {
      return
    }
    const sourcecode = meta()
    this.sourcecode = sourcecode.default
  },
  computed: {
    toolbarClasses() {
      return {
        'fdd-example__toolbar--expanded': this.codeVisible
      }
    },
    toggleCodeVisbilityIcon() {
      return `navigation-${this.codeVisible ? 'down' : 'right'}-arrow`
    },
    toggleCodeVisbilityTitle() {
      return this.codeVisible ? 'Hide Code' : 'Show Code'
    },
    toFullscreen() {
      return {
        path: `/example/${this.slug}/${this.name}`
      }
    },
    component() {
      return this.$refs.component
    },
    slug() {
      return this.route.meta.slug
    },
    route() {
      return this.$route
    },
    exampleComponent() {
      const { slug, name } = this
      return `Example${toPascalCase(slug)}${toPascalCase(name)}`
    },
    srcComponent() {
      const { slug, name } = this
      return `ExampleSrc${toPascalCase(slug)}${toPascalCase(name)}`
    }
  },
  data() {
    return {
      sourcecode: '',
      codeVisible: false
    }
  },
  methods: {
    codeTextContent() {
      const codeEl = this.$refs.code
      const code = codeEl.textContent
      return code
    },
    copyCode() {
      this.$copyText(this.codeTextContent())
    },
    showExampleStandalone() {
      const routeData = this.$router.resolve({
        name: 'example-demo',
        params: { id: this.exampleId }
      })
      window.open(routeData.href, '__blank')
    }
  }
}
</script>

<style lang="scss">
$example-padding-side: 20px;
$example-margin-bottom: 25px;
$example-border-color: #ebebeb;
$example-border: 1px solid $example-border-color;

.fdd-example {
  padding: 0;
  border-radius: 8px;
  margin-bottom: $example-margin-bottom;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  &__rendered {
    padding: 10px;
  }
  &__code > div > .minipress-highlight {
    border-radius: 0 0 10px 10px;
  }
  &__toolbar {
    margin-top: 10px;
    border-top: $example-border;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 0;
    &--expanded {
      border-bottom: $example-border;
    }
  }
}
</style>
