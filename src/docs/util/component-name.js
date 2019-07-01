// @ts-check
import kebabCase from "./kebab-case";
import slugified from "./slugify";
import deslugified from "./deslugify";

// This class helps us to migrate between different representations of a component name.
// There are different naming conventions.

/**
 * @param {any} invalidName
 * @returns {never}
 */
const handleInvalidName = invalidName => {
  throw Error(`Invalid component name: ${invalidName}`);
};

const NORMALIZED_PREFIX = "fd";

class ComponentName {
  /**
   * @param {any} raw
   * @returns {boolean}
   */
  static hasPrefix(raw) {
    if (raw == null) {
      return false;
    }
    if (typeof raw !== "string") {
      return false;
    }
    return raw.toLowerCase().startsWith(NORMALIZED_PREFIX);
  }
  /**
   * @param {any} raw
   * @returns {ComponentName}
   */
  static from(raw) {
    if (raw == null) {
      handleInvalidName(raw);
    }
    if (typeof raw !== "string") {
      handleInvalidName(raw);
    }

    if (raw.length <= NORMALIZED_PREFIX.length) {
      // Name has no prefix
      // let's kebab-case the raw string.
      return new ComponentName(`${NORMALIZED_PREFIX}-${kebabCase(raw)}`);
    }

    if (raw.toLowerCase().startsWith(NORMALIZED_PREFIX)) {
      return new ComponentName(kebabCase(raw));
    }
    return new ComponentName(`${NORMALIZED_PREFIX}-${kebabCase(raw)}`);
  }

  /** @param {string} normalized */
  constructor(normalized) {
    this._normalized = normalized;
  }
  /** @returns {string} */
  get normalized() {
    return this._normalized;
  }
  /** @returns {string} */
  get slugified() {
    return slugified(this.normalized);
  }
  /** @returns {string} */
  get slugifiedWithoutPrefix() {
    return slugified(this.normalizedWithoutPrefix);
  }

  /** @returns {string} */
  get normalizedWithoutPrefix() {
    return this.normalized.substring(3);
  }

  /** @returns {string} */
  get displayable() {
    return deslugified(this.normalizedWithoutPrefix);
  }
  /** @returns {string} */
  get displayableWithPrefix() {
    return this.normalized;
  }
}

export default ComponentName;
