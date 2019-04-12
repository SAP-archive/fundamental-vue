<title>Link</title>
<tip>
You can provide the visible title of the link by using a default slot or by using the `title`-prop.
If both are provided the `title`-prop is only used for the `title` attribute of the anchor. This means that

```html
<FdLink href="#" title="foo bar" />
```

is **equivialent** to

```html
<FdLink href="#" title="foo bar">foo bar</FdLink>
```

</tip>
<template>
  <div>
    <h3>Normal</h3>
    <p>
      Lorem ipsum
      <FdLink href="#" @click="handleClick">dolor sit amet consectetur</FdLink>
      adipiscing elit.
    </p>

    <h3>Selected</h3>
    <p>
      Lorem ipsum
      <FdLink href="#" selected @click="handleClick"
        >dolor sit amet consectetur</FdLink
      >
      adipiscing elit.
    </p>

    <h3>Disabled</h3>
    <p>
      Lorem ipsum
      <FdLink href="#" disabled @click="handleClick"
        >dolor sit amet consectetur</FdLink
      >
      adipiscing elit.
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    handleFocus() {
      console.log("focus"); // eslint-disable-line no-console
    },
    handleClick() {
      console.log("clicked"); // eslint-disable-line no-console
    }
  }
};
</script>
<style scoped>
p {
  margin-bottom: 20px;
}
</style>
