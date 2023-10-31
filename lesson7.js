function SliceArr(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let FirstSideArr = []
    let SecondPartArr = []
  
    const middle = Math.floor(arr.length / 2);
  
    for(i = 0; i < middle; i++){
        FirstSideArr.push(arr[i])
    }
    for(i = middle; i < arr.length; i++){
      SecondPartArr.push(arr[i])
    }
  
    if(FirstSideArr > 1 || SecondPartArr > 1){
      return mergeSort(SliceArr(FirstSideArr), SliceArr(SecondPartArr))
    }
  
    return mergeSort(SliceArr(FirstSideArr), SliceArr(SecondPartArr));
}

function mergeSort(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  
    return result;
}

const arrSort = SliceArr([23, 74, 23, 0, 26, 2, 56, 65])
console.log(arrSort)
