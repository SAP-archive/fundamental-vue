import Calendar from './calendar.vue'
import CalendarGrid from './calendar-grid.vue'
import CalendarHeader from './calendar-header.vue'
import CalendarItem from './calendar-item.vue'
import pluginify from './../../util/pluginify'
export default pluginify(Calendar, CalendarHeader, CalendarGrid, CalendarItem)
export { Calendar }
