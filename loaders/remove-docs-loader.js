'use strict';

const contentWithoutBlock = (content, block) => {
  const startTag = `<${block}>`;
  const endTag = `</${block}>`;
  const start = content.indexOf(startTag);
  const end = content.indexOf(endTag);
  if(start < 0 || end < 0 || end <= start) {
    return content;
  }
  const beforeBlock = content.substring(0, start);
  const afterBlock = content.substring(end + endTag.length);

  return `${beforeBlock}${afterBlock}`;
};

const [TITLE_TAG, TIP_TAG, DOCS_TAG] = ['docs', 'title', 'tip'];

module.exports = (content) => {
  const withoutDocs =
  contentWithoutBlock(
    contentWithoutBlock(
      contentWithoutBlock(content, TITLE_TAG
    ) , TIP_TAG
  ), DOCS_TAG).trim();
  return `export default ${JSON.stringify(withoutDocs)}`;
};
