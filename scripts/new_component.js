//  this script will create the required files to start developing a new component

// 2 arguments are passed by default to any script
if (process.argv.length < 3) {
    console.error('Please provide a component name');
    process.exit(1);
}

const fs = require("fs");
var path = require('path');

// will be used to change the font color on the console
const green = "\x1b[32m";
const yellow = "\x1b[33m";

const componentName = process.argv[2];
const force = process.argv.indexOf('-f') > -1 ? true : false

/**
 *
 * @param {String} path the path to the file to be created
 * @param {String} content the content to write to the file in case it didn't already exist
 */
function createFileIfMissing(path, content) {
    if (!force && fs.existsSync(path)) {
        console.log(yellow, `${path} already exists`);
    }

    fs.writeFileSync(path, content);
    console.log(green, `✔️ ${path} successfully created`);
}


function createDirIfMissing(path) {
    if (fs.existsSync(path)) {
        console.log(yellow, `${path} already exists`);
    }

    fs.mkdirSync(path, { recursive: true });
}

/**
 *
 * @param {String} str
 * transforms componentName to component-name
 */
function dasherize(str) {
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str.trim()
        .replace(/([A-Z])/g, '-$1')
        .replace(/[-_\s]+/g, '-')
        .toLowerCase();
};

// capitalizes the first letter of the string
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const componentDir = path.join('src', 'components', componentName);
const docMdDir = path.join('src', 'docs', 'content', 'en_us');
const docExamplesDir = path.join('src', 'docs', 'content', 'examples', dasherize(componentName));

createDirIfMissing(docMdDir);
createDirIfMissing(componentDir);
createDirIfMissing(docExamplesDir);

const exportedName = ucFirst(componentName);
const fdName = `Fd${ucFirst(componentName)}`;

// create the component File
createFileIfMissing(path.join(componentDir, `${exportedName}.vue`), `
<template>
    <p>${fdName} works!</p>
</template>

<script>
export default {
    name: '${fdName}'
}
</script>

<style lang="scss"></style>`);

// create index.js file to export the component and pluginify it
createFileIfMissing(path.join(componentDir, 'index.js'), `
import ${exportedName} from "./${exportedName}.vue";
import pluginify from "./../../util/pluginify";

export default pluginify(${exportedName});

export { ${exportedName} };`);

// create default documentation example
createFileIfMissing(path.join(docExamplesDir, 'default.vue'), `
<template>
    <${dasherize(fdName)}></${dasherize(fdName)}>
</template>

<script>
export default {
}
</script>
`)

// create default documentation markdown
createFileIfMissing(path.join(docMdDir, `${dasherize(exportedName)}.md`), `---
fdRelatedComponents:
  - ${dasherize(fdName)}
---

# ${exportedName}

start describing your component here

## Simple example
<d-example name="default">
</d-example>
`);


// edit the src/components/index.js content to import and use our new component

const compIndexPath = path.join('src', 'components', 'index.js');
let indexContent = fs.readFileSync(compIndexPath, "utf-8");
if (indexContent.indexOf(exportedName) === -1) {
    // find the first new line after the last occurence of an import statement
    let startIndex = indexContent.indexOf("\n", indexContent.lastIndexOf("import") + 1);

    indexContent = indexContent.slice(0, startIndex + 1) + `import ${exportedName} from "./${componentName}";\n` + indexContent.slice(startIndex);

    // find the first new line after the opening of the plugins array
    startIndex = indexContent.indexOf("\n", indexContent.indexOf("["));

    // this will add your component to the top the array
    // for readability reasons you might want to move it to its correct lexographical order
    indexContent = indexContent.slice(0, startIndex + 1) + exportedName + ",\n" + indexContent.slice(startIndex);

    fs.writeFileSync(compIndexPath, indexContent);

    console.log(green, `✔️ ${compIndexPath} successfully updated`);
} else {
    console.log(yellow, `the component seems to be already imported in ${compIndexPath}` )
}
