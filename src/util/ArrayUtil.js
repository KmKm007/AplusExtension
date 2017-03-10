function indexOf(val, array) {
  for (let i = 0, length = array.length; i < length; i++) {
    if (array[i] === val)
      return i
  }
  return -1
}

function remove(val, array) {
  let index = indexOf(val, array)
  if (index > -1) {
    array.splice(index, 1)
  }
}

export { indexOf, remove }
