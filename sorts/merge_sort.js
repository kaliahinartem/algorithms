const merge = (sortedArr1, sortedArr2) => {
    const iArrLength = sortedArr1.length,
        jArrLength = sortedArr2.length;
    let i = 0,
        j = 0,
        merged = [];

    while (i !== iArrLength && j !== jArrLength) {
        if (sortedArr1[i] < sortedArr2[j]) merged.push(sortedArr1[i++]);
        else merged.push(sortedArr2[j++]);
    }
    while (i < iArrLength) merged.push(sortedArr1[i++]);
    while (j < jArrLength) merged.push(sortedArr2[j++]);

    return merged;
}

const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(merge([1,4,45,99], [1, 24, 25, 102]))
console.log(mergeSort([12,43,1,2,65,182,12,14]))