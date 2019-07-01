---
fdRelatedComponents:
  - fd-link
---

# Link

::: tip

You can provide the visible title of the link by using a default slot or by using the `title`-prop.
If both are provided the `title`-prop is only used for the `title` attribute of the anchor. This means that

```xml
<fd-link href="#" title="foo bar" />
```

is **equivialent** to

```xml
<fd-link href="#" title="foo bar">foo bar</fd-link>
```

:::

<d-example name="default">
</d-example>
