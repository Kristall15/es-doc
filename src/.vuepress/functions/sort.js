export default (arr, key) => {
  arr.sort((current, next) => {
    let textCurr = ''
    let textNext = ''
    if (typeof current === 'object' && key) {
      textCurr = current[key].toUpperCase()
      textNext = next[key].toUpperCase()
    } else {
      textCurr = current.toUpperCase
      textNext = next.toUpperCase
    }
    return textCurr < textNext ? -1 : textCurr > textNext ? 1 : 0
  })
}
