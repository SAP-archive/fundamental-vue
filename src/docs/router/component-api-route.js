// @ts-check

/**
 * @param {import("./../util/component-name").default} name
 * @returns {import("vue-router").Location}
 */
export const routeConfigForComponentNamed = name => {
  return {
    name: "api",
    params: {
      slug: name.slugified
    }
  };
};
