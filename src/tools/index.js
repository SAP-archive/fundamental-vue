// @ts-check
const { parser } = require("@vuese/parser");
const { Render } = require("@vuese/markdown-render");
const klawSync = require("klaw-sync");
const Path = require("path");
const fs = require("fs");

const isSFCFile = item => Path.parse(item.path).ext === ".vue";

/**
 * For context see below.
 * @param {import("@vuese/parser").SlotResult} lhsSlot
 * @param {import("@vuese/parser").SlotResult} rhsSlot
 * @returns {import("@vuese/parser").SlotResult}
 */
const mergedSlot = (lhsSlot, rhsSlot) => {
  const name = lhsSlot.name;
  const {
    describe: lhsDescribe,
    backerDesc: lhsBackerDesc,
    bindings: lhsBindings,
    scoped: lhsScoped
  } = lhsSlot;
  const {
    describe: rhsDescribe,
    backerDesc: rhsBackerDesc,
    bindings: rhsBindings,
    scoped: rhsScoped
  } = rhsSlot;
  const describe =
    lhsDescribe.length >= rhsDescribe.length ? lhsDescribe : rhsDescribe;
  const backerDesc =
    lhsBackerDesc.length >= rhsBackerDesc.length
      ? lhsBackerDesc
      : rhsBackerDesc;
  const bindings =
    Object.keys(lhsBindings).length >= Object.keys(rhsBindings).length
      ? lhsBindings
      : rhsBindings;
  // The default seems to be 'false' – so if lhsScoped is true we take that. Otherwise we simply use rhsScoped
  const scoped = lhsScoped === true ? true : rhsScoped;
  return { scoped, name, describe, backerDesc, bindings };
};

/**
 * For context see below.
 * @param {import("@vuese/parser").SlotResult} slot
 * @param {import("@vuese/parser").SlotResult[]} otherSlots
 * @returns {import("@vuese/parser").SlotResult}
 */
const fixedSlot = (slot, otherSlots) => {
  const duplicateSlots = otherSlots.filter(({ name }) => name === slot.name);
  if (duplicateSlots.length === 0) {
    return slot; // no duplicates – phew
  }
  let fixed = slot;
  duplicateSlots.forEach(otherSlot => {
    fixed = mergedSlot(fixed, otherSlot);
  });
  return fixed;
};

/**
 * For context see fixedParserResult below.
 * @see https://github.com/vuese/vuese/commit/a3fb19b194fefc78ada69e7fdd3a9dc3dac1b39c
 * @param {import("@vuese/parser").SlotResult[]} slots
 * @returns {import("@vuese/parser").SlotResult[]}
 */
const fixedParserSlots = slots => {
  const fixedButDuplicated = slots.map((slot, index) => {
    const otherSlots = [...slots];
    // remove the current slot from the copy
    // the result are the 'other slots'
    otherSlots.splice(index, 1);
    return fixedSlot(slot, otherSlots);
  });
  // fixedButDuplicated now contains correct slots but duplicated still remain.
  const result = [];
  fixedButDuplicated.forEach(slot => {
    const alreadyInResult =
      result.findIndex(resultSlot => resultSlot.name === slot.name) >= 0;
    if (alreadyInResult) {
      return;
    }
    result.push(slot);
  });
  return result;
};

/**
 * Fixes the parser result. There is currently a bug in @vuese/parser
 * which causes result.slots to contain duplicate entries.
 * See: https://github.com/vuese/vuese/issues/83
 * @param {import("@vuese/parser").ParserResult} result
 * @returns {import("@vuese/parser").ParserResult}
 */
const fixedParserResult = result => {
  const { slots = [] } = result;
  return { ...result, slots: fixedParserSlots(slots) };
};

const paths = klawSync("./src/components", {
  traverseAll: true,
  nodir: true,
  filter: isSFCFile
}).map(klawItem => klawItem.path);

const parseFileAtPath = path => {
  const source = fs.readFileSync(path, "utf-8");
  try {
    return fixedParserResult(parser(source));
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

const _writeMarkdown = ({ filename, outputDir, result }) => {
  const destination = Path.format({
    dir: outputDir,
    name: filename,
    ext: ".md"
  });
  const render = new Render(result);
  const markdown = render.renderMarkdown() || {};
  fs.writeFileSync(destination, markdown.content || "");
};
const writeApi = ({ path, result }) => {
  /** @type {string} */
  const componentName = result.name || "";
  if (!componentName.toLowerCase().startsWith("fd")) {
    return;
  }
  const filename = `${componentName || Path.parse(path).name}.json`;
  const source = JSON.stringify(result, null, 2);
  const dest = Path.resolve(outputDir, filename);
  fs.writeFileSync(dest, source);
  if (process.env.FD_GENERATE_MD_API === "true") {
    _writeMarkdown({ filename, outputDir, result });
  }
};

results.forEach(writeApi);
