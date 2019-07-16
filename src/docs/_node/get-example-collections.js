// @ts-check

const globby = require("globby");
const slugify = require("./slugify");
const Path = require("path");

const getExampleCollections = () => {
  const pagesRoot = "src/docs/pages";
  const ingored = [Path.posix.join(pagesRoot, "index.js")];
  const allIndexFiles = globby.sync(Path.posix.join(pagesRoot, "**", "index.js"));
  const exampleCollectionModules = allIndexFiles.filter(path => !ingored.includes(path));

  const exampleCollections = exampleCollectionModules.map(collectionModule => {
    const dirname = Path.basename(Path.dirname(collectionModule));
    const slug = slugify(dirname);
    return {
      slug,
      dirname,
      absolutePath: collectionModule
    };
  });
  return exampleCollections;
};

module.exports = getExampleCollections;
