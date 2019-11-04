<script>
import isExternal from './is-external'

const EXTERNAL_ATTRS = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

const renderNativeAnchor = h => (href, context) => {
  const { props, data } = context

  const attrs = {
    ...data.attrs,
    href,
    ...(isExternal(href) ? EXTERNAL_ATTRS : {})
  }
  const _class = [
    data.class,
    {
      'fd-link': true,
      'is-selected': props.selected,
      'is-disabled': props.disabled
    }
  ]
  const _data = {
    ...context.data,
    attrs,
    class: _class
  }
  return h('a', _data, context.children || '')
}

const renderRouterLink = h => context => {
  const scopedSlots = {
    default({ href, route, navigate }) {
      return renderNativeAnchor(h)(href, context)
    }
  }
  const props = context.props
  return h('router-link', { props, scopedSlots })
}

export default {
  functional: true,
  name: 'FdLink',
  props: {
    selected: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    to: {},
    href: {
      type: String,
      default: null
    }
  },
  render(h, context) {
    const { props, children } = context
    const { to, href, disabled } = props
    if (href != null && typeof href === 'string') {
      return renderNativeAnchor(h)(href, context)
    }
    // The last check (isExternal(to)) ensures that links like:
    //    <FdLink to="https://example.org">…</FdLink>
    // is rendered as an external link.
    if (to != null && typeof to === 'string' && isExternal(to)) {
      return renderNativeAnchor(h)(to, context)
    }
    return renderRouterLink(h)(context)
  }
}
</script>
