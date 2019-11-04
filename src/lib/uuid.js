export default () => {
  let text = ''
  // we only use the lowercase alphabet.
  // this is conservative but required because element ids
  // cannot start with a number
  const possible = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
