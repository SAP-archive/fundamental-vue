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
} from '@/docs/pages';
import {
  ApiCollection,
  Api,
} from '@/api';
import { Shell, ShellHeader, App, AppMain, AppNavigation, all, SideNav, SideNavItem, SideNavList } from '@/components';
import './DefaultLayout.sass';

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

@Component({ name: 'DefaultLayout' })
export class DefaultLayout extends Vue {
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
          </SideNavItem>
        );
      };
      return collections.map(renderExampleCollection);
    };

    // @ts-ignore
    const VueDevToolsEnabled = this.$$VueDevToolsEnabled || false;
    const renderSideNav = () => {
      return (
        <SideNav
          style={{'padding-bottom': '25px'}}
          indexPath={this.activeMenuItemId}
        >
          <SideNavList>
            <SideNavItem itemId='start' on-click={this.showStartPage}>Start</SideNavItem>
            <SideNavItem itemId='new-component' on-click={() => this.push('/guide/new-component', 'new-component')}>New Component</SideNavItem>
            <SideNavItem submenuTitle='API Documentation' itemId='api-doc'>{renderExampleCollections(exampleCollections)}</SideNavItem>
          </SideNavList>
          <SideNavList style='margin-bottom: 60px;' header={'Components'}>
            {
              exampleCollections.map(item => (
                <SideNavItem icon={item.icon} itemId={`example-${item.slug}`} on-click={() => this.onExampleCollectionClick(item)}>
                  {item.title}
                </SideNavItem>
              ))
            }
          </SideNavList>
        </SideNav>
      );
    };
    return (
      <Shell>
        <ShellHeader fixed={true}>
        <div class='fd-shellbar' style='padding-left: 20px;'>
        <div class='fd-shellbar__group fd-shellbar__group--start'>
            <router-link to='/' class='fd-shellbar__logo'>
              <img src='/logo.png' srcset='/logo.png 1x, /logo@2x.png 2x' />
            </router-link>
            <div class='fd-shellbar__product'>
            <div class='fd-product-menu'>
             <div class='fd-popover fd-popover--right'>
               <div class='fd-popover__control'>
                 <router-link to='/' tag='button' class='fd-product-menu__control' aria-controls='9GLB2694' aria-haspopup='true' aria-expanded='false'>
                   <span class='fd-shellbar__title fd-product-menu__title'>Fundamental-Vue</span>
                 </router-link>
               </div>
               <div class='fd-popover__body fd-popover__body--right' aria-hidden='true' id='9GLB2694'>
                 <nav class='fd-menu'>
                   <ul class='fd-menu__list' />
                 </nav>
               </div>
             </div>
           </div>
            </div>
          </div>
          <div class='fd-shellbar__group fd-shellbar__group--middle' />
          <div class='fd-shellbar__group fd-shellbar__group--end'>
            <div class='fd-shellbar__actions'>
            <div class='fd-shellbar__action fd-shellbar__action--collapsible' />
            </div>
          </div>

        </div>
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
