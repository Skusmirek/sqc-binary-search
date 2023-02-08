const binarySearch = function (sortedArray, target) {
  let first = 0
  let last = sortedArray.length - 1
  while (first <= last) {
    const searchedForNumber = Math.floor((first + last) / 2)
    if (sortedArray[searchedForNumber] === target) {
      return searchedForNumber
    } else if (sortedArray[searchedForNumber] > target) {
      last = searchedForNumber - 1
    } else {
      first = searchedForNumber + 1
    }
  }
  console.log('Not found')
}
console.log(binarySearch([1, 4, 5, 7, 8].splice(1,4), 7))
console.log(binarySearch([11, 44, 55, 77, 88].splice(2,3), 77))
console.log(binarySearch([10, 40, 50, 70, 80].splice(3,4), 10))
