import storiesFor from '../util/stories-for'

const stories = storiesFor('table')

export default { title: 'table' }

export const example = stories('xxx')

export const defaultTable = stories('default')
export const complex = stories('complex')
export const noCells = stories('default-no-cells')
export const dynamicColumns = stories('dynamic-columns')
export const fixedColumn = stories('fixed-col')
export const noBorder = stories('no-border')
export const performanceTest = stories('performance-test')
export const selectByRowClick = stories('select-by-row-click')
export const selectionModes = stories('selection-modes')
export const semanticRowHighlighting = stories('semantic-row-highlighting')
export const stripes = stories('stripes')
export const withComponents = stories('with-components')
