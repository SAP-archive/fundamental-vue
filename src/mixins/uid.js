import shortUuid from './../lib/uuid'

export default {
  props: {
    uid: {
      type: String,
      default: shortUuid
    }
  }
}
