import storiesFor from '../util/stories-for'

const stories = storiesFor('container')

export default { title: 'container' }

export const defaultContainer = stories('0-container-default')
export const shiftedAndCentered = stories('shifted-and-centered')
export const Fluid = stories('1-container-fluid')
export const FluidWithColumns = stories('3-container-fluid-with-cols')
export const Centered = stories('2-container-centered')
