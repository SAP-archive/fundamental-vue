export default (page, example) => () => ({
  render(h) {
    return h(require('./../docs/pages/' + page + '/' + example + '.vue').default)
  }
})
