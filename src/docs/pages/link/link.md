---
fdRelatedComponents:
  - fd-link
---

# Link

`fd-link` can be used to render normal links (`<a …`) and Vue Router links.

::: tip

You should prefer `fd-link` over using `RouterLink` or `<a>` directly. There are two reasons for this:

1. **Styling and UX:** Always using `fd-link` ensures that links are always rendered the same way. Users will recognize links without thinking about it.
2. **Security:** Maybe even more important than styling/UX is the fact that `fd-link` automatically detects external links and adds additional security related attributes to the rendered anchor.

:::


## Default Links

<d-example name="default">
</d-example>

## Vue Router Integration

<d-example name="vue-router-links">
</d-example>
