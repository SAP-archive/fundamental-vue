---
fdRelatedComponents:
  - fd-split-view
---

# Split View
`fd-split-view` provides a standardized split view layout.

::: tip CSS NEEDED & BETA NOTICE

The Split View-related components require some additional CSS that is not part of Fundamental Styles. If you want to use the split view-related components you have to inlude the extra **Fundamental Vue CSS** file. It is part of the NPM package in `dist`. It is also available at [https://unpkg.com/fundamental-vue](https://unpkg.com/fundamental-vue@latest/dist/FundamentalVue.umd.css)

The Split View-related components are in **beta**.

:::

## Split View Anatomy
`fd-split-view` is a composite of a few other components that all work together:

- **Master:** The master component is displayed at the leading side of the split view (usually on the left side; in right-to-left languages it is placed on the right). Usually you display a list that allows a user to select something (a *master item*). You can use any component as *the master* – the only constraint is that you have to wrap your master component in a `fd-split-view-master`-instance.
- **Detail:** The detail component fills the remaining space in the split view and should be used to display the main content that is associated with the currently selected *master item*. You can use any of your existing components for the detail part of the split view – the only constraint is that you wrap it inside an instance of `fd-split-view-detail`.

::: tip

`fd-split-view` is *content-agnostic*: The master and detail components can be anything. You only have to make sure to put your master component inside a `fd-split-view-master` and your detail component inside a `fd-split-view-detail`.

:::

## Simple example

The simplest way to use it, would be by simply setting the `height` and provide the master and detail-components:

<d-example name="default">
</d-example>

## Display Modes

<d-example name="display-modes">
</d-example>
