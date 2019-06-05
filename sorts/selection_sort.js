let swap = (arr, index1, index2) => {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

let selectionSort = arr => {
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let indexChanged = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                indexChanged = true;
            }
        }
        if (indexChanged) swap(arr, minIndex, i);
    }

    return arr;
}

selectionSort([2, 3, 6, 12, 0, -14, 32]);