// let arr = [1, 2, 3, 5, 6,7, 8, 9];
let arr = [1, 2, 3, 4, 5, 6, 8, 9];


// search missing value from arr with O(N)
let sum = arr.reduce((sum, i) => sum += i);
let n = arr[arr.length - 1];

let num = n * (n + 1) / 2;

console.log(sum, num, num - sum);

// search missing value from arr with O(Log N))

let searchMissing = (arr) => {
    let lower = 0;
    let upper = arr.length - 1;
    let middle = 0;

    while (upper > lower + 1) {
        middle = lower + Math.floor((upper - lower) / 2);

        console.log(lower, upper, middle);

        if (arr[lower] - lower != arr[middle] - middle) {
            upper = middle
        }
        else if (arr[upper] - upper != arr[middle] - middle) {
            lower = middle
        } else {
            return -1;
        }
    }
    return middle + 1;
}

console.log("===", searchMissing(arr))

