import './DefaultLayout.sass';
import { Vue, Component } from 'vue-property-decorator';
import { Color } from '@/lib';
import { exampleCollections } from '@/docs/pages';
import {
    Shell,
    ShellHeader,
    App,
    AppMain,
    AppNavigation,
    SideNav,
    SideNavList,
    SideNavGroup,
    SideNavGroupTitle,
    ShellBar,
    ShellBarGroup,
    ShellBarLogo,
    ShellBarActions,
    ShellBarAction,
    ShellBarUserMenu,
    ShellBarProduct,
    MenuItem,
    Identifier,
    SideNavListItem,
} from '@/components';

type ComponentState = {
    title: string | null;
    icon: string | null;
    color: Color | null;
};

interface ExampleItem extends SideNavListItem {
    componentState: ComponentState;
}

const componentStateMapping: {[state: string]: ComponentState} = {
    stable: {
        title: 'Safe to use, no major updates planned.',
        color: 'accent-8',
        icon: 'thumb-up',
    },
    experimental: {
        title: 'Work-In-Progres that may be used but be prepared for changes in the future.',
        color: 'accent-1',
        icon: 'lab',
    },
    deprecated: {
        title: 'This component should not be used and will be removed in the future.',
        color: 'accent-3',
        icon: 'cancel',
    },
    inprogress: {
        title: 'This component is under development. Or it is being actively reviewed to be refactored, safe to use but talk to us.',
        color: 'accent-13',
        icon: 'edit',
    },
};

const componentStateFrom = (raw: string): ComponentState => componentStateMapping[raw];

@Component({ name: 'DefaultLayout' })
export class DefaultLayout extends Vue {
    private activeNavItemId: string | null = './Action Bar/index.ts';

    public render() {
        const renderSideNav = () => {
            const staticItems: SideNavListItem[] = [
                { id: 'start', name: 'Start', icon: 'home', to: '/start' },
                { id: 'new-component', name: 'New Component Guide', icon: 'write-new', to: '/guide/new-component' },
            ];
            const exampleItems: ExampleItem[] = exampleCollections.map(({ title, slug, icon, componentStatus }) => {
                return {
                    id: slug,
                    icon,
                    name: title,
                    to: {
                        name: 'example',
                        params: { slug },
                    },
                    componentState: componentStateFrom(componentStatus),
                };
            });
            return (
                <SideNav
                    mode='router'
                    style={{ 'padding-bottom': '25px' }}
                    selectedId={this.activeNavItemId}
                    {...
                        { on:
                            {
                                'update:selectedId': (newId: string | null) => {
                                    this.activeNavItemId = newId;
                                },
                            },
                        }
                    }
                >
                    <SideNavList items={staticItems} />
                    <SideNavGroup>
                        <SideNavGroupTitle>Examples</SideNavGroupTitle>
                        <SideNavList
                            items={exampleItems}
                            style='margin-bottom: 60px;'
                            {...{
                                scopedSlots: {
                                    afterLinkText: (scope: ExampleItem) => {
                                        return (
                                            <Identifier
                                                domProps-title={scope.componentState.title}
                                                circle={true}
                                                backgroundColor={scope.componentState.color || 'accent-6'}
                                                class='fd-has-float-right'
                                                size='xxs'
                                                icon={scope.componentState.icon}
                                            />
                                        );
                                    },
                                },
                            }}
                        />
                    </SideNavGroup>
                </SideNav>
            );
        };
        return (
            <Shell>
                <ShellHeader fixed={true}>
                    <ShellBar>
                        <ShellBarGroup position='start'>
                            <ShellBarLogo src='/images/logo.png' srcset='/images/logo.png 1x, /images/logo@2x.png 2x' />
                            <ShellBarProduct>Fundamental Vue</ShellBarProduct>
                        </ShellBarGroup>
                        <ShellBarGroup position='end'>
                            <ShellBarActions>
                                <ShellBarAction>
                                    <ShellBarUserMenu>
                                        <MenuItem>
                                            <a href='https://github.com/SAP/fundamental-vue/issues/new' target='_blank'>
                                                Report an Issue
                                            </a>
                                        </MenuItem>
                                    </ShellBarUserMenu>
                                </ShellBarAction>
                            </ShellBarActions>
                        </ShellBarGroup>
                    </ShellBar>
                </ShellHeader>
                <App>
                    <AppNavigation orientation='vertical' class='sidebar'>
                        {renderSideNav()}
                    </AppNavigation>
                    <AppMain class='main-with-sidebar'>
                        <router-view />
                    </AppMain>
                </App>
            </Shell>
        );
    }
}
