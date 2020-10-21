import storiesFor from '../util/stories-for'

const stories = storiesFor('tabs')

export default { title: 'tabs' }

export const defaultTabs = stories('default')
export const customItem = stories('custom-item')
export const tabBarWithPanels = stories('tab-bar-with-panels')
export const tabBar = stories('tab-bar')
