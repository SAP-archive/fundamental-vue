---
fdRelatedComponents:
  - fd-link
---

# Link

<tip>

You can provide the visible title of the link by using a default slot or by using the `title`-prop.
If both are provided the `title`-prop is only used for the `title` attribute of the anchor. This means that

```html
<fd-link href="#" title="foo bar" />
```

is **equivialent** to

```html
<fd-link href="#" title="foo bar">foo bar</fd-link>
```

</tip>

::: example default
:::
