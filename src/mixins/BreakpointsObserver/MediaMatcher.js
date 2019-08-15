/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = new Set();

/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode = null;

/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 *
 * @param {String} query
 */
function createEmptyStyleRule(query) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }

  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }

    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {.fd-media-query{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch {
    // failed to add style
  }
}

/**
 * @param {String} query
 * @returns {MediaQueryList}
 */
export function matchMedia(query) {
  // check if webkit-based browser
  if (window.webkitURL) {
    createEmptyStyleRule(query);
  }
  return window.matchMedia(query);
}
