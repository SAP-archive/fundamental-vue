import FormItem from "./FormItem.vue";
import FormLabel from "./FormLabel.vue";
import FormMessage from "./FormMessage.vue";
import FormSet from "./FormSet.vue";
import FormGroup from "./FormGroup.vue";
import Legend from "./Legend.vue";
import FieldSet from "./FieldSet.vue";
import Form from "./Form.vue";
import Input from "./Controls/Input.vue";
import Select from "./Controls/Select.vue";
import TextArea from "./Controls/TextArea.vue";
import Toggle from "./Controls/Toggle.vue";
import Checkbox from "./Controls/Checkbox.vue";
import Radio from "./Controls/Radio.vue";
import * as Controls from "./Controls";
import { pluginify } from "./../../util";

export default pluginify(
  Form,
  Input,
  Select,
  TextArea,
  Toggle,
  Checkbox,
  Radio,
  FormItem,
  FormLabel,
  FormMessage,
  FormSet,
  FormGroup,
  Legend,
  FieldSet
);
export {
  Form,
  Input,
  Select,
  TextArea,
  Toggle,
  Checkbox,
  Radio,
  FormItem,
  FormLabel,
  FormMessage,
  FormSet,
  FormGroup,
  Legend,
  FieldSet,
  Controls
};
