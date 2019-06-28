let binSearch = (array, elem) => {
    let end = array.length - 1,
        start = 0,
        middle = Math.ceil((end + start) / 2);
    while (array[middle] !== elem) {
        if (elem < array[middle] && start <= end) end = middle - 1;
        else start = middle + 1;
        middle = Math.ceil((start + end) / 2);
    }

    return array[middle] === elem ? middle : -1;
}

binSearch([1,2,3,4,5,6], 3);