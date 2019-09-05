<template>
  <div :class="computedClasses">
    <div class="fd-master-details__top-bar">
      <slot name="top-bar" />
    </div>
    <div class="fd-master-details__content-wrapper">
      <!-- master section: start -->
      <div
        :style="`flex-basis:${masterWidth}`"
        :class="['fd-master-details__column', isMobile ? 'fd-master-details__column--mobile' : '']"
      >
        <div class="fd-master-details__column-title">
          <slot name="master-title" />
        </div>
        <div class="fd-master-details__column-content">
          <!-- regular list: start -->
          <template v-if="!useVirtualizedList">
            <fd-list-group>
              <fd-list-group-item
                :key="index"
                v-for="(item, index) in masterItems"
                @click.native="itemSelected(index)"
                :class="[
                  'fd-master-details__master-list-item',
                  index === selectedIndex ? 'fd-has-background-color-background-selected' : ''
                ]"
              >
                <slot name="master-list-item" :item="item" :index="index"
                  >{{ index }}. {{ item }}</slot
                >
              </fd-list-group-item>
            </fd-list-group>
          </template>
          <!-- regular list: start -->

          <!-- virtualized list: start -->
          <template v-if="useVirtualizedList">
            <fd-virtualized-list v-bind="virtualizedListConfig" :items="masterItems">
              <template #item="{ item, index }">
                <fd-tile is-button transparent @click.native="itemSelected(index)">
                  <fd-tile-content>
                    <slot name="master-list-item" :item="item" :index="index"
                      >{{ index }}. {{ item }}</slot
                    >
                  </fd-tile-content>
                </fd-tile>
              </template>
            </fd-virtualized-list>
          </template>
          <!-- virtualized list: end -->
        </div>
      </div>
      <!-- master section: end -->

      <div class="fd-master-details__gap" v-if="!isMobile" :style="`flex-basis:${gap}`"></div>

      <!-- details section: start -->

      <!-- column display: start -->
      <template v-if="!showModal">
        <div class="fd-master-details__column fd-master-details__column--details">
          <div class="fd-master-details__column-title">
            <slot name="details-title" :item="selectionResult" />
          </div>
          <div class="fd-master-details__column-content">
            <template v-if="selectionResult">
              <slot name="loading" v-if="isLoading">
                <fd-spinner />
              </slot>
              <slot v-else name="details-content" :item="selectionResult" />
            </template>
            <template v-if="!selectionResult">
              <slot name="details-content-placeholder" />
            </template>
          </div>
        </div>
      </template>

      <!-- column display: end -->

      <!-- modal display: start -->
      <fd-modal :name="modalId" :ref="modalId" :modal-style="modalStyles">
        <template #title>
          <slot name="details-title" :item="selectionResult" />
        </template>
        <template #default="{close}">
          <template v-if="selectionResult">
            <slot name="loading" v-if="isLoading">
              <fd-spinner />
            </slot>
            <slot v-else name="details-content" :item="selectionResult" />
          </template>
        </template>
        <template #actions="{close}">
          <fd-button @click="close" styling="emphasized">Close</fd-button>
        </template>
      </fd-modal>
      <!-- modal display: end -->

      <!-- details section: end -->
    </div>
  </div>
</template>

<script>
import { Uid } from "./../../mixins";
import FdModal from "../Modal/Modal.vue";
import FdSpinner from "../Spinner/Spinner.vue";
import FdListGroup from "../ListGroup/ListGroup.vue";
import { BreakpointsObserver, Breakpoints } from "../../mixins";
import FdVirtualizedList from "../VirtualizedList/VirtualizedList.vue";

export default {
  name: "FdMasterDetails",
  components: {
    FdModal,
    FdSpinner,
    FdListGroup,
    FdVirtualizedList
  },
  mixins: [BreakpointsObserver, Uid],
  props: {
    autoOpenModal: {
      // when set to true, the modal will automatically open if a master element
      // was already selected
      type: Boolean,
      default: false
    },
    fullscreen: {
      // when set to true, the component will cover take up all the screen
      type: Boolean,
      default: false
    },
    gap: {
      // the width of the gap (in %) between the master and details columns
      //   it could be expressed in percentage ('3%')  or in pixels ('10px')
      type: String,
      default: "0px"
    },
    masterItems: {
      // the array of elements that will be used to populate the master list
      type: Array,
      default: () => []
    },
    masterWidth: {
      // the width of the master column it could be expressed in percentage ('70%')
      //   or in pixels ('700px')
      type: String,
      default: "50%"
    },
    mobileModalStyles: {
      // the styles object to pass to the modal
      type: Object,
      default: () => {}
    },
    mobileBreakpoints: {
      // the string or array of strings representing the media queries where
      // the view should be considered mobile to allow the component to change
      // its behavior accordingly
      type: [String, Array],
      default: Breakpoints.XSmall
    },
    selectionHandler: {
      // the function to be called when an item is selected. It receives the selected item
      // and can return any object. Async methods will be automatically awaited
      type: Function,
      default: function(item) {
        return item;
      }
    },
    useVirtualizedList: {
      // when set to true a virtualized list will be used instead of a regular one
      type: Boolean,
      default: false
    },
    virtualizedListProps: {
      // the object containing the configuration for the virtualized list in case the
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      selectedIndex: null,
      selectionResult: null,
      defaultVirtualizedListConfig: {
        keyField: "id",
        minItemSize: 50,
        loadMoreItems: function(done) {
          done();
        }
      },
      isLoading: false,
      showModal: false,
      modalIsOpened: false
    };
  },
  methods: {
    async itemSelected(index) {
      this.selectedIndex = index;
      if (this.selectionHandler && typeof this.selectionHandler === "function") {
        this.isLoading = true;
        this.selectionResult = await this.selectionHandler(this.masterItems[this.selectedIndex]);
        if (this.showModal) {
          this.openDetailsModal();
        }
        this.isLoading = false;
      }
    },
    openDetailsModal() {
      if (this.$refs[this.modalId]) {
        this.$fdModal.open(this.$refs[this.modalId]);
        this.modalIsOpened = true;
      }
    },
    closeDetailsModal() {
      if (this.$refs[this.modalId] && this.modalIsOpened) {
        this.$fdModal.close(this.$refs[this.modalId]);
        this.modalIsOpened = false;
      }
    }
  },
  computed: {
    virtualizedListConfig() {
      return { ...this.defaultVirtualizedListConfig, ...this.virtualizedListProps };
    },
    isMobile() {
      return this.$_observer_isMatch("mobile");
    },
    modalStyles() {
      return { ...{ width: "100vw", height: "100vh" }, ...this.mobileModalStyles };
    },
    modalId() {
      return this.uid;
    },
    computedClasses() {
      return {
        "fd-master-details__wrapper": true,
        "fd-master-details__wrapper--fullscreen": this.fullscreen
      };
    }
  },
  watch: {
    isMobile: {
      immediate: true,
      handler(newVal, oldVal) {
        // when switching from small screen to a bigger one
        if (oldVal === true && newVal === false) {
          this.closeDetailsModal();
          this.showModal = false;
        } else if (newVal === true) {
          // switched to small screen
          this.showModal = true;
          // if an item was already clicked, open the modal automatically
          if (
            this.autoOpenModal &&
            this.selectionResult !== null &&
            this.selectionResult !== undefined
          ) {
            this.openDetailsModal();
          }
        }
      }
    },
    mobileBreakpoints: newVal => {
      this.$_observer_registerBreakpoint("mobile", newVal);
    }
  },
  created() {
    if (this.fullscreen) {
      document.body.classList.add("full-master-details-layout");
    }
  },
  mounted() {
    this.$_observer_registerBreakpoint("mobile", this.mobileBreakpoints);
  },
  beforeDestroy() {
    if (this.fullscreen) {
      document.body.classList.remove("full-master-details-layout");
    }
  }
};
</script>

<style lang="scss">
@import "./master-details.styles.scss";
</style>
