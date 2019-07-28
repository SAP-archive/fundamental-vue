// @ts-check
/* eslint-env node */
"use strict";

class Md {
  constructor(text = "") {
    this.text = text;
  }
  /**
   * @param {number} level
   * @param {string} title
   */
  h(level, title) {
    this.text += `${"#".repeat(level)} ${title}`;
    return this;
  }
  nl() {
    this.text += "\n";
    return this;
  }
  strong(text) {
    this.text += `**${text}**`;
    return this;
  }
  /**
   * @param {string[] | string | null} text
   * @param {{defaultValue: string}=} options
   */
  code(text, { defaultValue } = { defaultValue: null }) {
    if (text == null) {
      if (defaultValue != null) {
        return this._code(defaultValue);
      }
      return this;
    }
    if (Array.isArray(text)) {
      return this.raw(text.map(text_ => `\`${text_}\``).join(" | "));
    }
    return this._code(text);
  }
  /** @param {string} text */
  _code(text) {
    this.text += `\`${text}\``;
    return this;
  }
  raw(raw) {
    this.text += raw;
    return this;
  }
  /**
   * @param {string[] | null} lines
   * @param {{wrap: boolean}} options
   */
  lines(lines, { wrap } = { wrap: false }) {
    if (lines == null) {
      return this;
    }
    if (lines.length > 0 && wrap) {
      this.nl();
    }
    lines.forEach(line => {
      this.raw(line).nl();
    });

    if (lines.length > 0 && wrap) {
      this.nl();
    }
    return this;
  }
}

module.exports = Md;
