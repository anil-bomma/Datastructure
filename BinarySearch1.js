let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];


// check the value exist or not
let valueSearch = (val, arr) => {
    let lower = 0;
    let upper = arr.length - 1;

    while (lower <= upper) {
        const middle = lower + Math.floor((upper - lower) / 2);

        console.log(lower, upper, middle, arr[middle]);

        if (val === arr[middle]) {
            return middle;
        }

        if (val < arr[middle]) {
            upper = middle - 1;
        } else {
            lower = middle + 1;
        }
    }
    
    return -1;
}

console.log("search 7: ", valueSearch(8, arr));
