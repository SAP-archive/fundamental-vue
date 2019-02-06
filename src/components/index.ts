export * from './ActionBar';
export * from './Alert';
export * from './Icon';
export * from './Panel';
export * from './Popover';
export * from './Badge';
export * from './Identifier';
export * from './Image';
export * from './Tabs';
export * from './Token';
export * from './Button';
export * from './SideNav';
export * from './Form';
export * from './Combobox';
export * from './Breadcrumb';
export * from './Label';
export * from './Status';
export * from './Link';
export * from './Spinner';
export * from './Modal';
export * from './ListGroup';
export * from './Table';
export * from './Menu';
export * from './Layout';
export * from './InlineHelp';
export * from './Tile';
export * from './TileGrid';
export * from './SearchInput';
export * from './Pagination';
export * from './Counter';
export * from './Calendar';
export * from './TimePicker';
// export * from './Tree';

import * as Form from './Form';
import * as SideNav from './SideNav';
import * as Tabs from './Tabs';

import * as Modal from './Modal';
import * as Token from './Token';
import * as Status from './Status';
import * as Alert from './Alert';
import { Plugin, PluginAPI } from '@/lib';
import { VueConstructor } from 'vue';
import * as Popover from './Popover';
import * as ListGroup from './ListGroup';
import * as Menu from './Menu';
import * as Panel from './Panel';
import * as Table from './Table';
import * as Layout from './Layout';
import * as Tile from './Tile';
import * as TileGrid from './TileGrid';
import * as SearchInput from './SearchInput';
import * as Link from './Link';
import { version, libName } from '@/config';
import * as Pagination from './Pagination';
import * as TimePicker from './TimePicker';
import * as InlineHelp from './InlineHelp';
// import * as Tree from './Tree';
import { log } from '@/core';

import * as Combobox from './Combobox';
import * as Breadcrumb from './Breadcrumb';
import * as BreadcrumbItem from './BreadcrumbItem';
import * as Button from './Button';
import * as ButtonGroup from './ButtonGroup';
import * as Calendar from './Calendar';
import * as ActionBar from './ActionBar';
import * as Badge from './Badge';
import * as Counter from './Counter';
import * as Icon from './Icon';
import * as Identifier from './Identifier';
import * as Image from './Image';
import * as Label from './Label';
import * as Spinner from './Spinner';
// import { I nput, InputGroup, Select, TextArea, Toggle ,Checkbox, Radio, FormItem, FormLabel, FormMessage, FormSet, FormGroup, Legend, FieldSet, Controls } from './Form';

// export const HelloWorld = import(/* webpackChunkName: "HelloWorld" */ './HelloWorld');
// export { default as HelloWorld } from './HelloWorld';

const allNonPluginComponents: { [key: string]: any } = {
  ...Tabs,
  // ...Tree,
};

// import { PluginFunction, PluginObject } from 'vue/types/plugin';

// const isPlugin = (ctor: any): ctor is PluginObject<any> {
//   return ctor != null && ctor.hasOwnProperty('install');
// }

const $plugin: Plugin = () => {
  return {
    install: (vue: VueConstructor, api: PluginAPI): void => {
      // if(isPlugin(vue)) {
      //   vue.use(BreadcrumbItem);

      // }
      vue.use(Alert.default);
      vue.use(ActionBar.default);
      vue.use(Badge.default);
      vue.use(Breadcrumb.default);
      vue.use(BreadcrumbItem.default);
      vue.use(Button.default);
      vue.use(ButtonGroup.default);
      vue.use(Calendar.default);
      vue.use(Combobox.default);
      vue.use(Counter.default);
      vue.use(Icon.default);
      vue.use(Identifier.default);
      vue.use(Image.default);
      vue.use(InlineHelp.default);
      vue.use(Label.default);
      vue.use(Link.default);
      vue.use(ListGroup.default);
      vue.use(Spinner.default);
      vue.use(Status.default);
      vue.use(Token.default);
      vue.use(TileGrid.default);
      vue.use(Form.default);
      vue.use(Menu.default);
      vue.use(SearchInput.default);
      vue.use(Table.default);
      vue.use(SideNav.default);
      vue.use(Popover.default);
      vue.use(Tile.default);
      vue.use(Modal.default);
      vue.use(Pagination.default);
      vue.use(TimePicker.default);
      vue.use(Panel.default);
      vue.use(Layout.default);

      for (const name of Object.keys(allNonPluginComponents)) {
        const comp = allNonPluginComponents[name];
        api.registerComponent(vue, comp, name);
      }
      if (api.options.log.welcome) {
        log(
          `%c Welcome to ${libName} %c Detected v${version} %c`,
          'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
          'background:#1661be ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
          'background:transparent',
        );
      }
    },
  };
};

export const all = {
  ...allNonPluginComponents,
  Alert: Alert.Alert,
  ActionBar: ActionBar.ActionBar,
  BreadcrumbItem: BreadcrumbItem.BreadcrumbItem,
  Breadcrumb: Breadcrumb.Breadcrumb,
  Button: Button.Button,
  Badge: Badge.Badge,
  ButtonGroup: ButtonGroup.ButtonGroup,
  Calendar: Calendar.Calendar,
  Combobox: Combobox.Combobox,
  Counter: Counter.Counter,
  Icon: Icon.Icon,
  Identifier: Identifier.Identifier,
  Image: Image.Image,
  InlineHelp: InlineHelp.InlineHelp,
  Label: Label.Label,
  Link: Link.Link,
  ListGroup: ListGroup.ListGroup,
  ListGroupItem: ListGroup.ListGroupItem,
  Spinner: Spinner.Spinner,
  Status: Status.Status,
  Token: Token.Token,
  TileGrid: TileGrid.TileGrid,
  Form: Form.Form,
  Menu: Menu.Menu,
  SearchInput: SearchInput.SearchInput,
  Table: Table.Table,
  SideNav: SideNav.SideNav,
  Popover: Popover.Popover,
  Tile: Tile.Tile,
  Modal: Modal.Modal,
  Pagination: Pagination.Pagination,
  TimePicker: TimePicker.TimePicker,
  Panel: Panel.Panel,
  Container: Layout.Container,
};

export const plugin = $plugin;
