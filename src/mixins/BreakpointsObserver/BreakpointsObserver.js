import debounce from "lodash.debounce";
import { matchMedia } from "./MediaMatcher";
import { splitMediaQueries, ensureArray } from "./helpers";

export default {
  methods: {
    /**
     * Loops over the registered breakpoints and updates their state
     */
    $_observer_windowResized() {
      let anyMatches = false;
      this.observer_registeredBreakpoints.forEach((queries, name) => {
        // a breakpoint is considered matching if at least one of the
        // media queries associated with it is matching
        const matches = queries.some(query => {
          return matchMedia(query).matches;
        });
        this.observer_breakpointsState[name] = { matches };

        anyMatches = matches || anyMatches;
      });
      this.observer_breakpointsState = { ...this.observer_breakpointsState };
      // to avoid re-updating with every breakpoint
      this.observer_matchesAnyBreakpoint = anyMatches;
    },
    /**
     * Allows components to register breakpoints so that they could check their state later on
     *
     * @param {String} name the name of the breakpoint to register (will override previous breakpoint with same name)
     * @param {String} query the media query string, it can contain multiple comma-separated queries
     */
    $_observer_registerBreakpoint(name, query) {
      this.observer_registeredBreakpoints.set(name, splitMediaQueries(ensureArray(query)));
      this.$_observer_windowResized();
    },
    /**
     * Allows the user to unregister a breakpoint. Useful when the user is checking
     * the observer_matchesAnyBreakpoint property
     * @param {String} name the name of the breakpoint to remove in case it exists
     */
    $_observer_unrigesterBreakpoint(name) {
      this.observer_registeredBreakpoints.delete(name);
      delete this.observer_breakpointsState[name];
    },
    /**
     * Returns a reactive boolean field, that will update when the breakpoint state changes (false/true)
     * allowing the component to bind this to a data member
     *
     * @param {String} name the name of the breakpoint the component wishes to check if it matches
     */
    $_observer_isMatch(name) {
      return this.observer_breakpointsState[name] && this.observer_breakpointsState[name].matches
        ? true
        : false;
    }
  },
  data() {
    return {
      observer_matchesAnyBreakpoint: false,
      observer_breakpointsState: {}
    };
  },
  created() {
    // non-reactive property that will hold the registered breakpoints
    // key: name value: array of media queries
    this.observer_registeredBreakpoints = new Map();
    // debounced listener to avoid excessive firing of the function when
    // the 'resize' event is triggered
    this.observer_debouncedListener = debounce(this.$_observer_windowResized, 100);
  },
  mounted() {
    window.addEventListener("resize", this.observer_debouncedListener);
  },
  destroyed() {
    window.removeEventListener("resize", this.observer_debouncedListener);
  }
};
