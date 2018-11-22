import {
  Vue,
  Component,
  Watch,
 } from 'vue-property-decorator';
import {
  Route,
  RawLocation,
} from 'vue-router';
import {
  exampleCollections,
  ExampleCollections,
  ExampleCollection,
} from './pages';
import {
  ApiCollection,
  Api,
} from '@/api';
import { all, Ui, SideNav, SideNavItem, SideNavList } from '@/components';
import './DocsPage.sass';

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

  // TODO: Make this nice.
  @Watch('$route', { immediate: true })
  public handleNewRoute(newRoute: Route) {
    const name = newRoute.name;
    if(name != null) {
      if(name === 'start') {
        this.activeMenuItemId = 'start';
      }
      if(name === 'home') {
        this.activeMenuItemId = null;
      }
      if(name === 'guide-new-component') {
        this.activeMenuItemId = 'new-component';
      }
      const slug = newRoute.params.slug;
      if(name != null && slug != null) {
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

  private push(path: string, activeItemId: string) {
    this.activeMenuItemId = activeItemId;
    this.$router.push({path});
  }

  public render() {
    const renderExampleCollections = (collections: ExampleCollections) => {
      const renderExampleCollection = (exampleCollection: ExampleCollection) => {
        const itemId = 'api-'+exampleCollection.slug;
        return (
          <SideNavItem
            on-click={() => this.onApiExampleCollectionClick(exampleCollection)}
            itemId={itemId}
          >
            {exampleCollection.title}
          </SideNavItem>);
      };
      return collections.map(renderExampleCollection);
    };

    // @ts-ignore
    const VueDevToolsEnabled = this.$$VueDevToolsEnabled || false;
    return (
      <Ui headerClass='navbar'>
        {VueDevToolsEnabled && <script src='http://localhost:8098' />}
        <div slot='header'>
          <router-link to='/'>
          <img style='margin-left: 10px;' class='navbar-logo' src='/logo.png' srcset='/logo.png 1x, /logo@2x.png 2x' />
          </router-link>
        </div>
        <SideNav defaultItemId={this.activeMenuItemId} class='sidebar' slot='sidebar'>
          <SideNavList
            class='sidebar-list'
            header='Vue Fundamentals'
          >
            <SideNavItem itemId='start' on-click={this.showStartPage}>Start</SideNavItem>
            <SideNavItem itemId='new-component' on-click={() => this.push('/guide/new-component', 'new-component')}>New Component</SideNavItem>
            <SideNavItem submenuTitle='API Documentation' itemId='api-doc'>
              {renderExampleCollections(exampleCollections)}
            </SideNavItem>
          </SideNavList>
          <SideNavList
            class='sidebar-list fd-has-margin-bottom-large'
            header={'Components'}
          >
            {exampleCollections.map(item => (
              <SideNavItem
                itemId={`example-${item.slug}`}
                on-click={() => this.onExampleCollectionClick(item)}
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
