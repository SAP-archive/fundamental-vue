import { Vue, Component, Watch } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';
import { uiComponents, UiComponent } from '@/docs/config';
import { ApiCollection, Api } from '@/api';
import { all, SideNavSubitem, Ui, SideNav, SideNavItem, SideNavSubmenu, SideNavList } from '@/components';

const collection = new ApiCollection();
for (const component of Object.values(all)) {
  if (!Reflect.has(component, 'options')) { continue; }
  const options = Reflect.get(component, 'options');
  if (typeof options === 'object') {
    if (Reflect.has(options, '$api')) {
      const api = Reflect.get(options, '$api');
      if (api instanceof Api) {
        collection.add(api);
      }
    }
  }
}

@Component({ name: 'docs-page' })
export class DocsPage extends Vue {
  private activeMenuItemId: string | null = null;

  @Watch('$route', { immediate: true })
  public handleNewRoute(newRoute: Route) {
    const name = newRoute.name;
    const slug = newRoute.params.slug;
    if(name != null && slug != null) {
      const itemId = `${name}-${slug}`;
      this.activeMenuItemId = itemId;
    }
  }

  private onComponentCollectionClick(doc: UiComponent) {
    const location: RawLocation = {
      name: 'example',
      params: { slug: doc.slug },
    };
    this.$router.push(location);
  }

  private onAPIItemClick(api: UiComponent) {
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

  public render() {
    const renderAPIItems = (apis: UiComponent[]) => {
      const renderAPIItem = (api: UiComponent) => {
        const itemId = 'api-'+api.slug;
        return (
          <SideNavSubitem
            on-click={() => this.onAPIItemClick(api)}
            itemId={itemId}
          >
            {api.title}
          </SideNavSubitem>);
      };
      return apis.map(apiItem => renderAPIItem(apiItem));
    };

    // @ts-ignore
    const VueDevToolsEnabled = this.$$VueDevToolsEnabled || false;
    return (
      <Ui>
        {VueDevToolsEnabled && <script src='http://localhost:8098' />}
        <div slot='header'>
          <img src='/logo.png' srcset='/logo.png 1x, /logo@2x.png 2x' />
        </div>
        <SideNav slot='sidebar'>
          <SideNavList value={this.activeMenuItemId} header='Vue Fundamentals'>
            <SideNavItem itemId='start-page' on-click={this.showStartPage}>Start</SideNavItem>
            <SideNavSubmenu title='API Documentation' itemId='api-doc'>
              {renderAPIItems(uiComponents)}
            </SideNavSubmenu>

          </SideNavList>
          <SideNavList
            header={'Components'}
            value={this.activeMenuItemId}
          >
            {uiComponents.map(item => (
              <SideNavItem
                itemId={`example-${item.slug}`}
                on-click={() => this.onComponentCollectionClick(item)}
              >
                {item.title}
              </SideNavItem>
            ),
            )}
            <SideNavItem itemId='99' route-name='app-layout-with-sidebar'>Layout with Sidebar</SideNavItem>
          </SideNavList>
        </SideNav>
        <div style='height: 100%;'><router-view /></div>
      </Ui>
    );
  }
}
