let binSearch = (array, value) => {
    let end = array.length - 1,
      start = 0;
      
    while (end > start) {
        let middle = Math.ceil(end + start / 2);
        if (array[middle] === value) return middle;
        else if (array[middle] < value) {
            start = middle;
            continue;
        } else {
            end = middle;
            continue;
        }
    }
    
    return -1;

}

binSearch([1,2,3,4,5,6], 3);