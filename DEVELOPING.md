## Environment Variables used during the Build Process

- `NODE_ENV` is required to be set
- `BASE_URL` must be used to set the base url
- If `FDD_PRERENDER` is set to `true` then a special Webpack configuration is used that will generate a static version of the documentation.
- If `FDD_PRERENDER_TEST_RUN` is set to `true` then not all different routes are generated. There are a lot of routes and sometimes you only want to test if some routes still work. By setting this to `true` you tell the build process to only render a handful of pages per major route (`/api`, `/example`, `/examples`, …).