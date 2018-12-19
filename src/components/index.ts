export * from './ActionBar';
export * from './Alert';
export * from './Icon';
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
export * from './SideNav';
export * from './Form';
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
export * from './ContextualMenu';
export * from './Pagination';
export * from './Calendar';

import * as Calendar from './Calendar';
import * as Button from './Button';
import * as Animations from './Animations';
import * as Form from './Form';
import * as SideNav from './SideNav';
import * as Tabs from './Tabs';

import { Identifier } from './Identifier';
import { Modal } from './Modal';
import { Token } from './Token';
import { Image } from './Image';
import { Spinner } from './Spinner';
import { Link } from './Link';
import { Badge } from './Badge';
import { Label } from './Label';
import { Status } from './Status';
import { ActionBar } from './ActionBar';
import { Alert } from './Alert';
import { Icon } from './Icon';
import { InlineHelp } from './InlineHelp';
import { Plugin, PluginAPI } from '@/lib';
import { VueConstructor } from 'vue';
import * as Breadcrumb from './Breadcrumb';
import * as Combobox from './Combobox';
import * as Popover from './Popover';
import * as ListGroup from './ListGroup';
import * as Menu from './Menu';
import * as Panel from './Panel';
import * as Table from './Table';
import * as Layout from './Layout';
import * as Tile from './Tile';
import * as TileGrid from './TileGrid';
import * as SearchInput from './SearchInput';
import * as ContextualMenu from './ContextualMenu';
import { version, libName } from '@/config';
import * as Pagination from './Pagination';
import { env } from '@/config';

export const all = {
    Token,
    Spinner,
    Modal,
    Identifier,
    Image,
    Link,
    Badge,
    Label,
    Status,
    Alert,
    ActionBar,
    Icon,
    InlineHelp,
    ...Calendar,
    ...Layout,
    ...Table,
    ...Combobox,
    ...SearchInput,
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
    ...Tile,
    ...TileGrid,
    ...ContextualMenu,
    ...Pagination,
};

const $plugin: Plugin = () => {
    return {
        install: (vue: VueConstructor, api: PluginAPI): void => {
            for (const name of Object.keys(all)) {
                const comp = all[name];
                api.registerComponent(vue, comp, name);
            }
            if(env !== 'production') {
                console.log(
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
