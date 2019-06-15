import $Support from "./$Support";
import ActionBar from "./ActionBar";
import Alert from "./Alert";
import Badge from "./Badge";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Calendar from "./Calendar";
import Combobox from "./Combobox";
import ComboboxMenu from "./ComboboxMenu";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import DropdownControl from "./DropdownControl";
import Form from "./Form";
import Icon from "./Icon";
import Identifier from "./Identifier";
import Image from "./Image";
import InlineHelp from "./InlineHelp";
import Label from "./Label";
import Layout from "./Layout";
import Link from "./Link";
import ListGroup from "./ListGroup";
import Menu from "./Menu";
import MenuPopover from "./MenuPopover";
import Modal from "./Modal";
import Pagination from "./Pagination";
import Panel from "./Panel";
import Popover from "./Popover";
import SearchInput from "./SearchInput";
import SideNav from "./SideNav";
import Spinner from "./Spinner";
import Status from "./Status";
import SplitButton from "./SplitButton";
import SplitButtonAuxiliary from "./SplitButtonAuxiliary";
import SplitButtonAction from "./SplitButtonAction";
import Table from "./Table";
import Tabs from "./Tabs";
import Tile from "./Tile";
import TileGrid from "./TileGrid";
import TimePicker from "./TimePicker";
import Token from "./Token";
import VirtualizedList from "./VirtualizedList";

const plugin = {
  install(vue, options) {
    const plugins = [
      $Support,
      ActionBar,
      Alert,
      Badge,
      Breadcrumb,
      BreadcrumbItem,
      Button,
      ButtonGroup,
      Calendar,
      Combobox,
      ComboboxMenu,
      Counter,
      Dropdown,
      DropdownControl,
      Form,
      Icon,
      Identifier,
      Image,
      InlineHelp,
      Label,
      Layout,
      Link,
      ListGroup,
      Menu,
      MenuPopover,
      Modal,
      Pagination,
      Panel,
      Popover,
      SearchInput,
      SideNav,
      Spinner,
      Status,
      SplitButton,
      SplitButtonAuxiliary,
      SplitButtonAction,
      Table,
      Tabs,
      Tile,
      TileGrid,
      TimePicker,
      Token,
      VirtualizedList
    ];
    plugins.forEach(plugin => vue.use(plugin, options));
  }
};
export default plugin;
