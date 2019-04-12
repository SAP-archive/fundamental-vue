import TimePicker from "./TimePicker.vue";
import TimeItem from "./TimeItem.vue";
import TimeInput from "./Time/TimeInput.vue";
import TimeAction from "./Time/TimeAction.vue";
import Time from "./Time/Time.vue";
import { pluginify } from "./../../util";
export default pluginify(TimePicker, TimeItem, TimeInput, TimeAction, Time);
export { TimePicker, TimeItem, TimeInput, TimeAction, Time };
