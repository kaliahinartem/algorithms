function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    //assuming that the pivot is always the first element
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) swap(arr, swapIndex++, i);
    }

    swap(arr, start, swapIndex);
}