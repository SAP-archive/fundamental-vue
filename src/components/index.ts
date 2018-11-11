export * from './ActionBar';
export * from './alert';
export * from './icon';
export * from './Animations';
export * from './Panel';
export * from './Popover';
export * from './Badge';
export * from './Combobox';
export * from './Identifier';
export * from './Image';
export * from './Tabs';
export * from './Token';
export * from './Button';
export * from './side-nav';
export * from './Form';
export * from './Breadcrumb';
export * from './Link';
export * from './Spinner';
export * from './Modal';
export * from './ListGroup';
export * from './Table';
export * from './Menu';
export * from './Layout';
export * from './InlineHelp';

import * as Button from './Button';
import * as Animations from './Animations';
import * as Form from './Form';
import * as SideNav from './side-nav';
import * as Tabs from './Tabs';
import { Identifier } from './Identifier';
import { Modal } from './Modal';
import { Token } from './Token';
import { Image } from './Image';
import { Spinner } from './Spinner';
import { Link } from './Link';
import { Badge } from './Badge';
import { ActionBar } from './ActionBar';
import { Alert } from './alert';
import { Icon } from './icon';
import { InlineHelp } from './InlineHelp';
import { Plugin, PluginAPI } from '@/lib/plugin';
import { VueConstructor } from 'vue';
import * as Breadcrumb from './Breadcrumb';
import * as Combobox from './Combobox';
import * as Popover from './Popover';
import * as ListGroup from './ListGroup';
import * as Menu from './Menu';
import * as Panel from './Panel';
import * as Table from './Table';
import * as Layout from './Layout';

export const all = {
  Token,
  Spinner,
  Modal,
  Identifier,
  Image,
  Link,
  Badge,
  Alert,
  ActionBar,
  Icon,
  InlineHelp,
  ...Layout,
  ...Table,
  ...Combobox,
  ...Panel,
  ...Menu,
  ...Popover,
  ...Animations,
  ...Button,
  ...Tabs,
  ...SideNav,
  ...Form,
  ...Breadcrumb,
  ...ListGroup,
};

const $plugin: Plugin = () => {
  return {
    install: (vue: VueConstructor, api: PluginAPI): void => {
      for (const name of Object.keys(all)) {
        const comp = all[name];
        api.registerComponent(vue, comp, name);
      }
      const version = '0.0.1';
      console.log(`%c Welcome to fundamental-vue %c Detected v${version} %c`, 'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff', 'background:#1661be ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff', 'background:transparent');
    },
  };
};

export const plugin = $plugin;
