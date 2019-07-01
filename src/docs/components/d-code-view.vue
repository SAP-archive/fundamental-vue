<script>
import Prism from "prismjs";

export default {
  functional: true,
  props: {
    sourcecode: {
      type: String
    },
    language: {
      type: String,
      default: "markup"
    }
  },
  render(h, ctx) {
    const code =
      ctx.props.sourcecode || (ctx.children && ctx.children.length > 0 ? ctx.children[0].text : "");
    const language = ctx.props.language;
    const prismLanguage = Prism.languages[language];
    const className = `language-${language}`;
    const codeEl = h("code", {
      class: className,
      domProps: {
        innerHTML: Prism.highlight(code, prismLanguage)
      }
    });
    const preEl = h("pre", { class: className }, [codeEl]);
    return h("div", { attrs: { "data-fdd-sourcecode": "true" }, class: "fdd-code" }, [preEl]);
  }
};
</script>

<style lang="scss">
/**
 * GHColors theme by Avi Aryan (http://aviaryan.in)
 * Inspired by Github syntax coloring
 */

.fdd-code {
  padding: 10px;
  margin: 0;
  width: 100%;
  background-color: white;
  > pre {
    overflow: auto;
  }
}
code[class*="language-"],
pre[class*="language-"] {
  padding: 0;
  margin: 0;
  overflow: auto;
  background-color: white;
  color: #393a34;
  font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  font-size: 14px;
  line-height: 28px;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
  background: #b3d4fc;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
  background: #b3d4fc;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 0;
  margin: 0;
  overflow: auto;
  border: 0px solid #dddddd;
  background-color: white;
}

/* Inline code */

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999988;
  font-style: italic;
}

.token.namespace {
  opacity: 0.7;
}

.token.string,
.token.attr-value {
  color: #e3116c;
}
.token.punctuation,
.token.operator {
  color: #393a34; /* no highlight */
}

.token.entity,
.token.url,
.token.symbol,
.token.number,
.token.boolean,
.token.variable,
.token.constant,
.token.property,
.token.regex,
.token.inserted {
  color: #36acaa;
}

.token.atrule,
.token.keyword,
.token.attr-name,
.language-autohotkey .token.selector {
  color: #00a4db;
}

.token.function,
.token.deleted,
.language-autohotkey .token.tag {
  color: #9a050f;
}

.token.tag,
.token.selector,
.language-autohotkey .token.keyword {
  color: #00009f;
}

.token.important,
.token.function,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}
</style>
