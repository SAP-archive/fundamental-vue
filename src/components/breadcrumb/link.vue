<script>
export default {
  name: 'FdBreadcrumbLink',
  functional: true,
  render(h, ctx) {
    const data = {
      ...ctx.data,
      class: 'fd-breadcrumb__link'
    }
    return h('a', data, ctx.children)
  }
}
</script>
