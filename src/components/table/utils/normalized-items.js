import shortUuid from './../../../lib/uuid'

export default rawItems => {
  return rawItems.map(raw => {
    const id = raw.hasOwnProperty('id') ? raw.id : shortUuid()
    return { id, ...raw }
  })
}
