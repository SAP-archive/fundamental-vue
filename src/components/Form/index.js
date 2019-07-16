import FormItem from "./FormItem.vue";
import FormLabel from "./FormLabel.vue";
import FormMessage from "./FormMessage.vue";
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
import FdFormItemRadio from "./items/form-item-radio.vue";
import FdFormItemCheckbox from "./items/form-item-checkbox.vue";
import FdFormItemToggle from "./items/form-item-toggle.vue";

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
  FormGroup,
  Legend,
  FieldSet,
  FdFormItemRadio,
  FdFormItemCheckbox,
  FdFormItemToggle
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
  FormGroup,
  Legend,
  FieldSet,
  Controls,
  FdFormItemRadio,
  FdFormItemCheckbox,
  FdFormItemToggle
};
