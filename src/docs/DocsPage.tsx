import { Vue, Component, Watch } from 'vue-property-decorator';
import { Route, RawLocation } from 'vue-router';
import { uiComponents, UIComponent } from '@/docs/config';
import { APICollection, API } from '@/api';
import { slugify } from './util';
import { all } from '@/components';

const collection = new APICollection();
for (const component of Object.values(all)) {
  if (!Reflect.has(component, 'options')) { continue; }
  const options = Reflect.get(component, 'options');
  if (typeof options === 'object') {
    if (Reflect.has(options, '$api')) {
      const api = Reflect.get(options, '$api');
      if (api instanceof API) {
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
    this.activeMenuItemId = newRoute.params.slug;
  }

  private onComponentCollectionClick(doc: UIComponent) {
    const location: RawLocation = {
      name: 'example',
      params: { slug: doc.slug },
    };
    this.$router.push(location);
  }

  private onAPIItemClick(api: API) {
    const slug = 'api-' + slugify(api.humanName || '');
    const location: RawLocation = {
      path: '/docs/api/' + slug,
      params: { slug },
    };
    this.$router.push(location);
  }

  private showStartPage() {
    this.$router.push({
      path: '/start',
    });
  }

  public render() {
    const renderAPIItems = (apis: API[]) => {
      const renderAPIItem = (api: API) => {
        const itemId = 'api-' + slugify(api.humanName || '');
        return (
          <vf-side-nav-subitem
            on-click={() => this.onAPIItemClick(api)}
            itemId={itemId}
          >
            {api.humanName}
          </vf-side-nav-subitem>);
      };
      return apis.map(apiItem => renderAPIItem(apiItem));
    };

    const apiDocs = collection.apis;
    return (
      <vf-ui>
        <div slot='header'>
          <img src='/logo.png' srcset='/logo.png 1x, /logo@2x.png 2x' />
        </div>
        <vf-side-nav slot='sidebar'>
          <vf-side-nav-list value={this.activeMenuItemId} header='Vue Fundamentals'>
            <vf-side-nav-item itemId='000' on-click={this.showStartPage}>Start</vf-side-nav-item>
            <vf-side-nav-submenu title='API Documentation' itemId='100'>
              {renderAPIItems(apiDocs)}
            </vf-side-nav-submenu>

          </vf-side-nav-list>
          <vf-side-nav-list
            header={'Components'}
            value={this.activeMenuItemId}
          >
            {uiComponents.map(item => (
              <vf-side-nav-item
                itemId={item.slug}
                on-click={() => this.onComponentCollectionClick(item)}
              >
                {item.title}
              </vf-side-nav-item>
            ),
            )}
            <vf-side-nav-item itemId='99' route-name='app-layout-with-sidebar'>Layout with Sidebar</vf-side-nav-item>
          </vf-side-nav-list>
        </vf-side-nav>
        <div style='height: 100%;'><router-view /></div>
      </vf-ui>
    );
  }
}
