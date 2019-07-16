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
    const code = ctx.props.sourcecode;
    const language = ctx.props.language;
    const prismLanguage = Prism.languages[language];
    const className = `language-${language}`;

    return (
      h("PRE", {
        ...ctx.data,
        class: [ctx.data.class, className]
      }),
      [
        h("code", {
          class: className,
          domProps: {
            innerHTML: Prism.highlight(code, prismLanguage)
          }
        })
      ]
    );
  }
};
</script>

<style>
.sourcecode {
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: white;
}

/**
 * GHColors theme by Avi Aryan (http://aviaryan.in)
 * Inspired by Github syntax coloring
 */

code[class*="language-"],
pre[class*="language-"] {
  color: #393a34;
  font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier,
    monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  font-size: 0.95em;
  line-height: 1.2em;

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
:not(pre) > code[class*="language-"] {
  padding: 0.2em;
  background-color: white;
  border: 0px solid white;
}

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
