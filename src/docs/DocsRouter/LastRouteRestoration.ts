import Router from 'vue-router';
import { localStorageAvailable } from './local-storage-utils';

const LAST_ROUTE_KEY = 'com.sap.fundamental-vue.fd-last-route-fullPath';
type Options = { restoreWhenReady: boolean };

// This function reads the last stored route from the local storage and restores
// the router using that route. This is useful during development.
// TODO: Disable for production.
export const enableLastRouteRestoration = (router: Router, { restoreWhenReady }: Options) => {
  // We get the last route now so that we can restore it later.
  const lastRoute = localStorageAvailable() ? window.localStorage.getItem(LAST_ROUTE_KEY) : null;

  router.afterEach(({fullPath}) => {
    if (localStorageAvailable()) {
      window.localStorage.setItem(LAST_ROUTE_KEY, fullPath);
    }
  });
  if(restoreWhenReady) {
    router.onReady(() => {
      if(localStorageAvailable()) {
        if (lastRoute != null) {
          router.push(router.resolve(lastRoute).location);
        }
      }
    });
  }
};
