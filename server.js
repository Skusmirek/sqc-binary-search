const binarySearch = function (sortedArray, target) {
  let first = 0 
  
  let last = sortedArray.length - 1

  while(first <= last) {

    let searchedForNumber = Math.floor((first + last) / 2);

    if(sortedArray[searchedForNumber] === target) {
      return searchedForNumber
    } else if (sortedArray[searchedForNumber] > target){

      last = searchedForNumber - 1

    } else {

      first = searchedForNumber + 1

    }

  }

  console.log("Not found")
}


console.log (binarySearch([1,4,5,7,8], 7))