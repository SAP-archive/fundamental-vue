import { ActionBar } from './ActionBar';
import { Alert } from './Alert';
import { Badge } from './Badge';
import { Counter } from './Counter';
import { Icon } from './Icon';
import { Identifier } from './Identifier';
import { Image } from './Image';
import { InlineHelp } from './InlineHelp';
import { Label } from './Label';
import { Link } from './Link';
import { Modal } from './Modal';
import { Pagination } from './Pagination';
import { Plugin, PluginAPI } from '@/lib';
import { Spinner } from './Spinner';
import { Status } from './Status';
import { Token } from './Token';
import { VueConstructor } from 'vue';
import * as Breadcrumb from './Breadcrumb';
import * as Button from './Button';
import * as Calendar from './Calendar';
import * as Combobox from './Combobox';
import * as ContextualMenu from './ContextualMenu';
import * as Form from './Form';
import * as Layout from './Layout';
import * as ListGroup from './ListGroup';
import * as Menu from './Menu';
import * as Panel from './Panel';
import * as Popover from './Popover';
import * as SearchInput from './SearchInput';
import * as SideNav from './SideNav';
import * as Table from './Table';
import * as Tabs from './Tabs';
import * as Tile from './Tile';
import * as TileGrid from './TileGrid';
import * as Tree from './Tree';
import { version, libName } from '@/config';
import { log } from '@/core';

export * from './ActionBar';
export * from './Alert';
export * from './Badge';
export * from './Breadcrumb';
export * from './Button';
export * from './Calendar';
export * from './Combobox';
export * from './Counter';
export * from './Form';
export * from './Icon';
export * from './Identifier';
export * from './Image';
export * from './InlineHelp';
export * from './Label';
export * from './Layout';
export * from './Link';
export * from './ListGroup';
export * from './Menu';
export * from './Modal';
export * from './Pagination';
export * from './Panel';
export * from './Popover';
export * from './SearchInput';
export * from './SideNav';
export * from './Spinner';
export * from './Status';
export * from './Table';
export * from './Tabs';
export * from './Tile';
export * from './TileGrid';
export * from './Token';
export * from './Tree';

export const all: { [key: string]: any } = {
  ...Breadcrumb,
  ...Button,
  ...Calendar,
  ...Combobox,
  ...ContextualMenu,
  ...Form,
  ...Layout,
  ...ListGroup,
  ...Menu,
  ...Panel,
  ...Popover,
  ...SearchInput,
  ...SideNav,
  ...Table,
  ...Tabs,
  ...Tile,
  ...TileGrid,
  ...Tree,
  ActionBar,
  Alert,
  Badge,
  Counter,
  Icon,
  Identifier,
  Image,
  InlineHelp,
  Label,
  Link,
  Modal,
  Pagination,
  Spinner,
  Status,
  Token,
};

const $plugin: Plugin = () => {
  return {
    install: (vue: VueConstructor, api: PluginAPI): void => {
      for (const name of Object.keys(all)) {
        const comp = all[name];
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

export const plugin = $plugin;
