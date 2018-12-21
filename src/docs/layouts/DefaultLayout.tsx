import { Vue, Component, Watch } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';
import { Color } from '@/lib';
import { exampleCollections, ExampleCollections, ExampleCollection } from '@/docs/pages';
import {
    Shell,
    ShellHeader,
    App,
    AppMain,
    AppNavigation,
    SideNav,
    SideNavItem,
    SideNavList,
    ShellBar,
    ShellBarGroup,
    ShellBarLogo,
    ShellBarActions,
    ShellBarAction,
    ShellBarUserMenu,
    ShellBarProduct,
    MenuItem,
} from '@/components';
import './DefaultLayout.sass';

@Component({ name: 'DefaultLayout' })
export class DefaultLayout extends Vue {
    private activeMenuItemId: string | null = null;

    // TODO: Make this nice.
    @Watch('$route', { immediate: true })
    public handleNewRoute(newRoute: Route) {
        const name = newRoute.name;
        if (name != null) {
            if (name === 'start') {
                this.activeMenuItemId = 'start';
            }
            if (name === 'home') {
                this.activeMenuItemId = null;
            }
            if (name === 'guide-new-component') {
                this.activeMenuItemId = 'new-component';
            }
            const slug = newRoute.params.slug;
            if (name != null && slug != null) {
                const itemId = `${name}-${slug}`;
                this.activeMenuItemId = itemId;
            }
        }
    }

    private onExampleCollectionClick(doc: ExampleCollection) {
        const location: RawLocation = {
            name: 'example',
            params: { slug: doc.slug },
        };
        this.$router.push(location);
    }

    private onApiExampleCollectionClick(api: ExampleCollection) {
        const location: RawLocation = {
            name: 'api',
            params: { slug: api.slug },
        };
        this.$router.push(location);
    }

    private showStartPage() {
        this.$router.push({
            path: '/start',
        });
    }

    private getComponentStateTooltip(componentStatus: string) {
        let text: string | undefined;
        switch (componentStatus) {
            case 'stable': {
                text = 'Safe to use, no major updates planned.';
                break;
            }
            case 'experimental': {
                text = 'Work-In-Progres that may be used but be prepared for changes in the future.';
                break;
            }
            case 'deprecated': {
                text = 'This component should not be used and will be removed in the future.';
                break;
            }
            case 'inprogress': {
                text =
                    'This component is under development. Or it is being actively reviewed to be refactored, safe to use but talk to us.';
                break;
            }
        }

        return text;
    }

    private getComponentIcon(componentStatus: string) {
        let icon: string | undefined;
        switch (componentStatus) {
            case 'stable': {
                icon = 'thumb-up';
                break;
            }
            case 'experimental': {
                icon = 'lab';
                break;
            }
            case 'deprecated': {
                icon = 'cancel';
                break;
            }
            case 'inprogress': {
                icon = 'edit';
                break;
            }
        }
        return icon;
    }

    private getIconColor(componentStatus: string): Color | undefined {
        let color: Color | undefined;

        switch (componentStatus) {
            case 'stable': {
                color = 'accent-8';
                break;
            }
            case 'experimental': {
                color = 'accent-1';
                break;
            }
            case 'deprecated': {
                color = 'accent-3';
                break;
            }
            case 'inprogress': {
                color = 'accent-13';
                break;
            }
        }

        return color;
    }
    // stable - thumb-up
    // experimental - lab
    // deprecated - cancel
    // in dev - edit/activity

    private push(path: string, activeItemId: string) {
        this.activeMenuItemId = activeItemId;
        this.$router.push({ path });
    }

    public render() {
        const renderExampleCollections = (collections: ExampleCollections) => {
            const renderExampleCollection = (exampleCollection: ExampleCollection) => {
                const itemId = 'api-' + exampleCollection.slug;
                return (
                    <SideNavItem on-click={() => this.onApiExampleCollectionClick(exampleCollection)} itemId={itemId}>
                        {exampleCollection.title}
                    </SideNavItem>
                );
            };
            return collections.map(renderExampleCollection);
        };

        const renderSideNav = () => {
            return (
                <SideNav style={{ 'padding-bottom': '25px' }} indexPath={this.activeMenuItemId}>
                    <SideNavList>
                        <SideNavItem icon='home' itemId='start' on-click={this.showStartPage}>
                            Start
                        </SideNavItem>
                        <SideNavItem
                            icon='write-new'
                            itemId='new-component'
                            on-click={() => this.push('/guide/new-component', 'new-component')}
                        >
                            New Component
                        </SideNavItem>
                        <SideNavItem icon='source-code' submenuTitle='API Documentation' itemId='api-doc'>
                            {renderExampleCollections(exampleCollections)}
                        </SideNavItem>
                    </SideNavList>
                    <SideNavList style='margin-bottom: 60px;' header={'Components'}>
                        {exampleCollections.map(item => (
                            <SideNavItem
                                componentText={this.getComponentStateTooltip(item.componentStatus)}
                                accessoryIcon={this.getComponentIcon(item.componentStatus)}
                                icon={item.icon}
                                color={this.getIconColor(item.componentStatus)}
                                itemId={`example-${item.slug}`}
                                on-click={() => this.onExampleCollectionClick(item)}
                            >
                                {item.title}
                            </SideNavItem>
                        ))}
                    </SideNavList>
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
