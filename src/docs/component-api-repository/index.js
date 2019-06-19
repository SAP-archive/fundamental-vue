// @ts-check
import slugify from "./../util/slugify";

class ComponentApiRepository {
  // a key looks like: './FdAlert.json'
  constructor(keys) {
    this.keys = keys;
  }

  /**
   * @param {string} key
   * @returns {string}
   */
  displayableComponentName(key) {
    return key.replace("./", "").replace(".json", "");
  }

  /**
   * @param {string} key
   * @returns {string}
   */
  slugifiedComponentName(key) {
    return slugify(this.displayableComponentName(key));
  }

  /** @param {string} key */
  routeForKey(key) {
    return {
      props: {
        componentKey: key
      },
      name: `component-api.${slugify(key)}`,
      path: this.slugifiedComponentName(key)
    };
  }
}

export default ComponentApiRepository;
