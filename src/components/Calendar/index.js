import Calendar from "./Calendar.vue";
import CalendarHeader from "./CalendarHeader.vue";
import { pluginify } from "./../../util";
export default pluginify(Calendar, CalendarHeader);
export { Calendar };
