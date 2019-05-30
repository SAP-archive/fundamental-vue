const { parser } = require("@vuese/parser");
const { Render } = require("@vuese/markdown-render");
const klawSync = require("klaw-sync");
const Path = require("path");
const fs = require("fs");

const isSFCFile = item => Path.parse(item.path).ext === ".vue";

const paths = klawSync("./src/components", {
  traverseAll: true,
  nodir: true,
  filter: isSFCFile
}).map(klawItem => klawItem.path);

const parseFileAtPath = path => {
  const source = fs.readFileSync(path, "utf-8");
  try {
    const parserRes = parser(source);
    return parserRes;
  } catch (e) {
    return {};
  }
};

const apiForFileAtPath = path => ({
  path,
  result: parseFileAtPath(path)
});

const rimraf = require("rimraf");
const results = paths.map(apiForFileAtPath);
const outputDir = Path.resolve("./api/");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}
rimraf.sync(outputDir + "/*");

const writeApi = ({ path, result }) => {
  /** @type {string} */
  const componentName = result.name || "";
  if (!componentName.toLowerCase().startsWith("fd")) {
    return;
  }
  const filename = `${componentName || Path.parse(path).name}.json`;
  const source = JSON.stringify(result, null, 2);
  const dest = Path.resolve(outputDir, filename);
  const destmd = Path.resolve(outputDir, filename + ".md");
  const r = new Render(result);
  const markdownRes = r.renderMarkdown() || {};
  fs.writeFileSync(dest, source);
  fs.writeFileSync(destmd, markdownRes.content || "");
};

results.forEach(writeApi);
