const Path = require("path");
const klawSync = require("klaw-sync");
const FS = require("fs");

const _examplesRoot = Path.resolve(
  process.cwd(),
  "docs",
  ".vuepress",
  "components",
  "examples"
);

const getExamplesForExampleDir = name => {
  const exampleDir = Path.resolve(_examplesRoot, name);

  return klawSync(exampleDir, {
    traverseAll: true,
    nodir: true,
    filter: item => item.path.endsWith(".vue")
  }).map(item => {
    return {
      filePath: item.path,
      content: FS.readFileSync(item.path, "utf-8"),
      fileName: Path.parse(item.path).name
    };
  });
};
const getExamplesDirNameForAbsolutePath = raw => {
  if (raw == null) {
    return;
  }

  const path = Path.parse(raw);
  const components = raw.split(Path.sep);
  if (components.length < 2) {
    return;
  }
  // We expect:
  // filename: "$example.md"
  // examples root: "examples"
  const [filename, examplesRoot] = [...components].reverse();
  if (examplesRoot !== "examples") {
    return;
  }
  if (!filename.endsWith(".md")) {
    return;
  }
  return path.name;
};

module.exports = {
  extendPageData($page) {
    const { _filePath } = $page;
    const exampleDirName = getExamplesDirNameForAbsolutePath(_filePath);
    if (exampleDirName != null) {
      const examples = getExamplesForExampleDir(exampleDirName);
      $page.fdExampleCollectionName = exampleDirName;
      const examplesByName = {};
      examples.forEach(example => {
        examplesByName[example.fileName] = example;
      });
      $page.fdExamplesByName = examplesByName;
    }
  }
};
