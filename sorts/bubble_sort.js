let swap = (arr, index1, index2) => {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

let bubbleSort = (arr) => {
    let arrLength = arr.length,
      noSwaps = true;
    for (let i = arrLength; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                noSwaps = false;
                swap(arr, j, j+1);
            }
        }
        if (noSwaps) break;
   }

   return arr;
}

bubbleSort([1, 5, 2, 12, 9, 8]);