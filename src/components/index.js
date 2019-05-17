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
import Modal from "./Modal";
import Pagination from "./Pagination";
import Panel from "./Panel";
import Popover from "./Popover";
import SearchInput from "./SearchInput";
import SideNav from "./SideNav";
import Spinner from "./Spinner";
import Status from "./Status";
import Table from "./Table";
import Tabs from "./Tabs";
import Tile from "./Tile";
import TileGrid from "./TileGrid";
import TimePicker from "./TimePicker";
import Token from "./Token";
import $fd from "./$fd";

const plugin = {
  install(vue, options) {
    const plugins = [
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
      Modal,
      Pagination,
      Panel,
      Popover,
      SearchInput,
      SideNav,
      Spinner,
      Status,
      Table,
      Tabs,
      Tile,
      TileGrid,
      TimePicker,
      Token,
      $fd
    ];
    plugins.forEach(plugin => vue.use(plugin, options));
  }
};
export default plugin;
