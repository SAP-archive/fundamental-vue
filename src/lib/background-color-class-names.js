// @ts-check
import backgroundColorClassName from './background-color-class-name'

/**
 * @param {string=} color
 */
export default color => (color ? [backgroundColorClassName(color)] : [])
