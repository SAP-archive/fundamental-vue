'use strict';

const contentWithoutBlock = (content, block) => {
  const selfClosing = `<${block} />`;
  const selfClosingIndex = content.indexOf(selfClosing);
  if(selfClosingIndex > -1) {
    return content.replace(selfClosing, '');
  }
  const startTag = '<' + block + '>';
  const endTag = '</' + block + '>';
  const start = content.indexOf(startTag);
  const end = content.indexOf(endTag);
  if(start < 0 || end < 0 || end <= start) {
    return content;
  }
  const beforeBlock = content.substring(0, start);
  const afterBlock = content.substring(end + endTag.length);

  return beforeBlock + afterBlock;
};

module.exports = (content) => {
  const blocksToRemove = ['condensed', 'fullscreen-only', 'docs', 'title', 'tip'];
  const result = blocksToRemove.reduce((prev, curr) => contentWithoutBlock(prev, curr), content).trim();
  return 'export default ' + JSON.stringify(result);
};
